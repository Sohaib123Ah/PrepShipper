const express = require("express");
const {
  adminAllUser,
  adminSingleUser,
  adminUpdateRole,
  adminDeleteUser,
  adminAllProducts,
  adminSingleProduct,
  adminUpdateProductStatus,
  adminDeleteProduct,
  adminUserProducts,
  adminPickProducts,
  adminPackProducts,
  adminDeliveredProducts,
  adminProcessingProducts,
  adminSingleProductUser,
} = require("../controllers/adminController");
const { authenticated, authorizeAdmin } = require("../middlewares/userAuth");

const route = express.Router();

route.get("/admin/users", authenticated, authorizeAdmin, adminAllUser);

route.get("/admin/user/:id", authenticated, authorizeAdmin, adminSingleUser);

route.post(
  "/admin/product/user",
  authenticated,
  authorizeAdmin,
  adminSingleProductUser
);

route.get(
  "/admin/role/update/:id",
  authenticated,
  authorizeAdmin,
  adminUpdateRole
);

route.delete(
  "/admin/delete/user/:id",
  authenticated,
  authorizeAdmin,
  adminDeleteUser
);

route.get("/admin/products", authenticated, authorizeAdmin, adminAllProducts);

route.get(
  "/admin/product/:id",
  authenticated,
  authorizeAdmin,
  adminSingleProduct
);

route.post(
  "/admin/product/update/:id",
  authenticated,
  authorizeAdmin,
  adminUpdateProductStatus
);

route.delete(
  "/admin/product/delete/:id",
  authenticated,
  authorizeAdmin,
  adminDeleteProduct
);

route.get(
  "/admin/user/products/:id",
  authenticated,
  authorizeAdmin,
  adminUserProducts
);

route.get(
  "/admin/products/pick",
  authenticated,
  authorizeAdmin,
  adminPickProducts
);

route.get(
  "/admin/products/pack",
  authenticated,
  authorizeAdmin,
  adminPackProducts
);

route.get(
  "/admin/products/delivered",
  authenticated,
  authorizeAdmin,
  adminDeliveredProducts
);

route.get(
  "/admin/products/processing",
  authenticated,
  authorizeAdmin,
  adminProcessingProducts
);

module.exports = route;
