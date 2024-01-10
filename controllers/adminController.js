const Product = require("../models/productModel");
const User = require("../models/ueerModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const fs = require("fs");

exports.adminAllUser = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({}).sort({ _id: -1 });

  res.status(200).json({
    success: true,
    users,
  });
});

exports.adminSingleUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById({ _id: req.params.id });

  res.status(200).json({
    success: true,
    user,
  });
});

exports.adminSingleProductUser = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;

  const user = await User.findById({ _id: id });

  res.status(200).json({
    success: true,
    user,
  });
});

exports.adminUpdateRole = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById({ _id: req.params.id });

  if (user.role == "user") {
    user.role = "admin";
    await user.save();
  } else {
    user.role = "user";
    await user.save();
  }

  res.status(200).json({
    success: true,
    user,
  });
});

exports.adminDeleteUser = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById({ _id: req.params.id });

  await user.deleteOne();

  res.status(200).json({
    success: true,
    message: "User Deleted Successfully",
  });
});

exports.adminAllProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({});

  res.status(200).json({
    success: true,
    products,
  });
});

exports.adminSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById({ _id: req.params.id });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.adminUpdateProductStatus = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById({ _id: req.params.id });

  if (product.status === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status == "Pick") {
    product.status = "Pick";
  }

  if (req.body.status == "Pack") {
    product.status = "Pack";
  }

  if (req.body.status == "Delivered") {
    product.status = "Delivered";
    product.deliveredAt = Date.now();
  }

  await product.save();

  res.status(200).json({
    success: true,
    product,
  });
});

exports.adminDeleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById({ _id: req.params.id });

  for (let i = 0; i < product.images.length; i++) {
    fs.unlink(`${rootPath}/${product.images[i]}`, (err) => {
      if (err) {
        return next(new ErrorHandler("Images not deleted", 400));
      }
    });
  }

  fs.unlink(`${rootPath}/${product.invoice}`, (err) => {
    if (err) {
      return next(new ErrorHandler("Invoice not deleted", 400));
    }
  });

  fs.unlink(`${rootPath}/${product.label}`, (err) => {
    if (err) {
      return next(new ErrorHandler("Label not deleted", 400));
    }
  });

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});

exports.adminUserProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({ user: req.params.id });

  res.status(200).json({
    success: true,
    products,
  });
});

exports.adminPickProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({ status: "Pick" });

  res.status(200).json({
    success: true,
    products,
  });
});

exports.adminPackProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({ status: "Pack" });

  res.status(200).json({
    success: true,
    products,
  });
});

exports.adminDeliveredProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({ status: "Delivered" });

  res.status(200).json({
    success: true,
    products,
  });
});

exports.adminProcessingProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find({ status: "Processing" });

  res.status(200).json({
    success: true,
    products,
  });
});
