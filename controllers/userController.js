const User = require("../models/ueerModel");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/sendToken");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");

// Create Otp
exports.SendOtp = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorHandler("Enter email", 400));
  }

  const isExistEmail = await User.findOne({ email });

  if (isExistEmail) {
    return next(new ErrorHandler("Email Already Exist", 400));
  }

  const otp = crypto.randomInt(1000, 9999);

  const data = `${otp}`;

  const hash = crypto
    .createHmac("sha256", process.env.OTP_VERIFICATION_HASH_SECRET)
    .update(data)
    .digest("hex");

  const message = `Your verify Otp ${otp}`;

  try {
    await sendEmail(email, "OTP Verification", message);

    // res.status(200).json({
    //   success: true,
    //message:`opt send to ${email}`
    //   hash,
    // });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }

  res.status(200).json({
    success: true,
    hash,
    message: `The verification otp has been sent to ${email}`,
    otp,
  });
});

// User Register
exports.RegisterAndOtpVerification = catchAsyncErrors(
  async (req, res, next) => {
    const {
      otp,
      hash,
      name,
      email,
      phoneNumber,
      country,
      address,
      city,
      state,
      zipCode,
      password,
      confirmPassword,
    } = req.body;

    const myEmail = process.env.MY_EMAIL;

    const isExistEmail = await User.findOne({ email });

    if (isExistEmail) {
      return next(new ErrorHandler("Email Already Exist", 400));
    }

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !country ||
      !address ||
      !city ||
      !state ||
      !zipCode
    ) {
      return next(new ErrorHandler("All Fields Required", 400));
    }

    const data = `${otp}`;
    const compareHashedOtp = crypto
      .createHmac("sha256", process.env.OTP_VERIFICATION_HASH_SECRET)
      .update(data)
      .digest("hex");

    const compareOtp = hash === compareHashedOtp;
    if (!compareOtp) {
      return next(new ErrorHandler("Otp incorrect", 400));
    }

    if (password.length < 8) {
      return next(
        new ErrorHandler("Password should be greater than 8 characters", 400)
      );
    }

    if (password !== confirmPassword) {
      return next(new ErrorHandler("Password does not matched", 400));
    }

    const user = await User.create({
      name,
      email,
      password,
      phoneNumber,
      country,
      address,
      city,
      state,
      zipCode,
    });

    if (myEmail === email) {
      user.role = "admin";
      await user.save();
    }

    sendToken(res, 201, "Account Register SuccessFully", user);
  }
);

// User Login
exports.Login = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("All Fields Required", 400));
  }

  if (password.length < 8) {
    return next(
      new ErrorHandler("Password should be greater than 8 characters", 400)
    );
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Email & Password incorrect", 400));
  }

  const compPas = await user.comparePassword(password);

  if (!compPas) {
    return next(new ErrorHandler("Email & Password incorrect", 400));
  }

  sendToken(res, 200, "Login SuccessFully", user);
});

// User Logout
exports.Logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// User Profile
exports.MyProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user);

  res.status(200).json({
    success: true,
    user,
  });
});

// User Forget Password
exports.ForgetPassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHandler("Incorrect email entered", 400));
  }

  const resetToken = user.getResetPasswordToken();

  await user.save();

  const resetPasswordUrl = `http://localhost:3000/reset/password/${resetToken}`;

  const message = `Your reset password token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail(user.email, "Password Recovery", message);

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();
    return next(new ErrorHandler(error.message, 500));
  }
});

// User ResetPassword
exports.ResetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not matched", 400));
  }

  user.password = req.body.password;
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  sendToken(res, 200, "Password Reset SuccessFully", user);
});

// Change Name
exports.changeName = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  const { changeName } = req.body;

  user.name = changeName;

  await user.save();

  res.status(201).json({
    success: true,
    message: "Name Changed",
  });
});

// Change Password
exports.changePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const { currentPassword, newPassword, confirmPassword } = req.body;

  if (!currentPassword || !newPassword || !confirmPassword) {
    return next(new ErrorHandler("All Fields Required", 400));
  }

  const compPas = await user.comparePassword(currentPassword);

  if (!compPas) {
    return next(new ErrorHandler("Current Password incorrect", 400));
  }

  if (newPassword.length < 8) {
    return next(
      new ErrorHandler("Password should be greater than 8 characters", 400)
    );
  }

  if (newPassword !== confirmPassword) {
    return next(new ErrorHandler("Password does not matched", 400));
  }

  user.password = newPassword;

  await user.save();

  res.status(201).json({
    success: true,
    message: "Password Changed",
  });
});

// Change Address
exports.changeAddress = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  const { country, state, phoneNumber, city, zipCode, address } = req.body;

  if (country) {
    user.country = country;
  }

  if (state) {
    user.state = state;
  }

  if (phoneNumber) {
    user.phoneNumber = phoneNumber;
  }

  if (city) {
    user.city = city;
  }

  if (zipCode) {
    user.zipCode = zipCode;
  }

  if (address) {
    user.address = address;
  }

  await user.save();

  res.status(201).json({
    success: true,
    message: "Address Updated",
  });
});
