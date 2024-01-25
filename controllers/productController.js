const Product = require("../models/productModel");
const User = require("../models/ueerModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const fs = require("fs");
const pdfkit = require("pdfkit");
const path = require("path");
const stripe = require("stripe")(process.env.STRIPE_SEC_KEY)

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  const {
    name,
    quantity,
    category,
    trackingNumber,
    packProducts,
    carton,
    container,
  } = req.body;

  const arr = [];
  for (let prodimg of req.files.images) {
    arr.push(prodimg);
  }

  const path = [];
  for (let prodpath of arr) {
    path.push(`${prodpath.path}`);
  }

  let quantityPrice = 0;
  let packPrice = 0;
  let containerPrice = 0;
  let cartonPrice = 0;
  let totalPrice = 0;
  let roundPrice = 0;

  if (packProducts == 0) {
    if (quantity > 0 && quantity <= 50) {
      quantityPrice = quantity * 0.95;
    } else if (quantity >= 51 && quantity <= 500) {
      quantityPrice = quantity * 0.85;
    } else if (quantity >= 501) {
      quantityPrice = quantity * 0.75;
    }
  } else if (packProducts == 2) {
    quantityPrice = 0;
    packPrice = quantity * 0.99;
  } else if (packProducts == 3) {
    quantityPrice = 0;
    packPrice = quantity * 1.14;
  } else if (packProducts == 4) {
    quantityPrice = 0;
    packPrice = quantity * 2.1;
  } else if (packProducts == 5 || packProducts == 6 || packProducts > 6) {
    quantityPrice = 0;
    packPrice = quantity * 2.19;
  }

  if (container == 20) {
    containerPrice = 250;
  } else if (container == 40) {
    containerPrice = 400;
  }

  if (carton > 0 && carton <= 10) {
    cartonPrice = carton * 1.5;
  } else if (carton > 10 && carton <= 50) {
    cartonPrice = carton * 1.25;
  } else if (carton > 50 && carton <= 100) {
    cartonPrice = carton * 1;
  } else if (carton > 100) {
    cartonPrice = carton * 0.9;
  }

  totalPrice = quantityPrice + packPrice + containerPrice + cartonPrice;
  roundPrice = Math.round(totalPrice);

  const product = await Product.create({
    name,
    quantity,
    category,
    packProducts,
    trackingNumber,
    carton,
    container,
    price: roundPrice,
    label: req.files.file[0].path,
    images: path,
    user: req.user.id,
  });

  res.redirect("/products");
});

exports.generateInvoice = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById({ _id: req.params.id });

  const user = await User.findById({ _id: product.user });

  const pdfDoc = new pdfkit();

  let sellerInfo = {
    companyName: "PrepShipper",
    address: "7301 Staples Mill Rd, RIchmond VA 23228",
    city: "Richmond",
    state: "Virginia",
    pincode: "23228",
    country: "united states",
    contactNo: "+8047671300",
  };

  const invoiceDate = product.createdAt;
  const characters = "0123456789";
  let invoiceNumber = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    invoiceNumber += characters[randomIndex];
  }

  let fontNormal = "Helvetica";
  let fontBold = "Helvetica-Bold";

  const pdfPath = path.join(
    __dirname,
    "..",
    "invoices",
    `invoice_${product._id}.pdf`
  );

  let invoicePath = pdfPath.split("backend\\")[1];
  product.invoice = invoicePath;
  await product.save();

  pdfDoc.pipe(fs.createWriteStream(pdfPath));

  pdfDoc.image(path.join(__dirname, "..", "logo.png"), 25, 20, {
    width: 150,
    height: 50,
  });

  pdfDoc
    .font(fontNormal)
    .fontSize(14)
    .text("Order Invoice", 400, 30, { width: 200 });

  pdfDoc
    .fontSize(10)
    .text(String(invoiceDate).split("G")[0], 400, 46, { width: 200 });

  pdfDoc.font(fontBold).text("Sold by:", 7, 100);
  pdfDoc.font(fontNormal).text(sellerInfo.companyName, 7, 115, { width: 250 });
  pdfDoc.text(sellerInfo.address, 7, 130, { width: 250 });
  pdfDoc.text(sellerInfo.city + " " + sellerInfo.pincode, 7, 145, {
    width: 250,
  });
  pdfDoc.text(sellerInfo.state + " " + sellerInfo.country, 7, 160, {
    width: 250,
  });

  pdfDoc.font(fontBold).text("Customer details:", 400, 100);
  pdfDoc.font(fontNormal).text(user.name, 400, 115, { width: 250 });
  pdfDoc.text(user.address, 400, 130, { width: 250 });
  pdfDoc.text(user.city + " " + user.zipCode, 400, 145, {
    width: 250,
  });
  pdfDoc.text(user.state + " " + user.country, 400, 160, {
    width: 250,
  });

  pdfDoc.text("Order No:" + product._id, 7, 195, { width: 250 });
  pdfDoc.text("Invoice No:" + invoiceNumber, 7, 210, { width: 250 });
  pdfDoc.text("Date:" + String(invoiceDate).split("G")[0], 7, 225, {
    width: 250,
  });

  pdfDoc.rect(7, 250, 560, 20).fill("#FC427B").stroke("#FC427B");
  pdfDoc.fillColor("#fff").text("ID", 20, 256, { width: 90 });
  pdfDoc.text("Product", 110, 256, { width: 190 });
  pdfDoc.text("Quantity", 300, 256, { width: 100 });
  pdfDoc.text("Category", 400, 256, { width: 100 });
  pdfDoc.text("Total Price", 500, 256, { width: 100 });

  let productNo = 1;
  let y = 256 + productNo * 20;
  pdfDoc
    .fillColor("#000")
    .text(String(product._id).slice(0, 8), 20, y, { width: 90 });
  pdfDoc.text(product.name.slice(0, 15) + "...", 110, y, { width: 190 });
  pdfDoc.text(product.quantity, 300, y, { width: 100 });
  pdfDoc.text(product.category, 400, y, { width: 100 });
  pdfDoc.text(`$${product.price}`, 500, y, { width: 100 });

  pdfDoc.rect(7, 350, 560, 20).fill("#FC427B").stroke("#FC427B");
  pdfDoc.fillColor("#fff").text("Pack OF Products", 20, 356, { width: 120 });
  pdfDoc.text("Quantity", 150, 356, { width: 120 });
  pdfDoc.text("Container Size", 280, 356, { width: 120 });
  pdfDoc.text("Carton", 400, 356, { width: 120 });
  pdfDoc.text("Total Price", 500, 356, { width: 120 });

  let productNo2 = 1;
  let y2 = 356 + productNo2 * 20;
  pdfDoc.fillColor("#000").text(product.packProducts, 20, y2, { width: 120 });
  pdfDoc.text(product.quantity, 150, y2, { width: 120 });
  pdfDoc.text(product.container, 280, y2, { width: 120 });
  pdfDoc.text(product.carton, 400, y2, { width: 120 });
  pdfDoc.text(`$${product.price}`, 500, y2, { width: 120 });

  pdfDoc.image(path.join(__dirname, "..", "logo.png"), 25, 20, {
    width: 150,
    height: 50,
  });

  pdfDoc.image(path.join(__dirname, "..", "logo.png"), 50, 700, {
    width: 150,
    height: 50,
    align: "right",
  });

  pdfDoc.end();

  res.status(200).json({
    success: true,
  });
});

exports.userProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({ user: req.user.id }).sort({ _id: -1 });

  res.status(200).json({
    success: true,
    products,
  });
});

exports.singleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findOne({ _id: req.params.id });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.createPayment = catchAsyncErrors(async (req, res, next) => {
  const id = req.body.id;

  const product = await Product.findById({ _id: id });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name
          },
          unit_amount: product.price * 100
        },
        quantity: 1
      },
    ],
    mode: "payment",
    success_url: `${process.env.URL}/payment/success`,
    cancel_url: `${process.env.URL}/payment/cancel`,
  });

  res.status(200).json({
    success: true,
    id: session.id,
    url: session.url,
  });

});

exports.paymentStatus = catchAsyncErrors(async (req, res, next) => {
  const id = req.body.id;

  const product = await Product.findById({ _id: id });

  product.payment = "YES";
  await product.save();

  res.status(200).json({
    success: true
  });

});