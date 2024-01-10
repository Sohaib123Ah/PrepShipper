const express = require("express");
const {
  createProduct,
  userProducts,
  generateInvoice,
  singleProduct,
} = require("../controllers/productController");
const uploadHandler = require("../middlewares/multiMulter");
const { authenticated } = require("../middlewares/userAuth");

const route = express.Router();

route.post(
  "/new/product",
  uploadHandler.fields([
    { name: "images", maxCount: 4 },
    { name: "file", maxCount: 1 },
  ]),
  authenticated,
  createProduct
);

route.get("/user/products", authenticated, userProducts);

route.post("/generate/invoice/:id", authenticated, generateInvoice);

route.get("/single/product/:id", authenticated, singleProduct);

module.exports = route;
