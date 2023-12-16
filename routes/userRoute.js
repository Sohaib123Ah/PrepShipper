const express = require("express");
const {
  RegisterAndOtpVerification,
  Login,
  Logout,
  MyProfile,
  ResetPassword,
  ForgetPassword,
  SendOtp,
  changeName,
  changePassword,
  changeAddress,
} = require("../controllers/userController");
const { authenticated } = require("../middlewares/userAuth");

const route = express.Router();

// Send Otp
route.post("/auth/otp", SendOtp);

// User Register
route.post("/auth/register", RegisterAndOtpVerification);

// User Login
route.post("/auth/login", Login);

// User Logout
route.get("/auth/logout", authenticated, Logout);

// User Profile
route.get("/me", authenticated, MyProfile);

// User Forget Password
route.post("/forget/password", ForgetPassword);

// User Reset Password
route.post("/reset/password/:token", ResetPassword);

// User Change Name
route.put("/change/name", authenticated, changeName);

// User Change Password
route.put("/change/password", authenticated, changePassword);

// User Change Password
route.put("/change/address", authenticated, changeAddress);

module.exports = route;
