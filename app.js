const express = require("express");
const config = require("dotenv");
const error = require("./middlewares/error");
const app = express();
config.config({ path: "./config/config.env" });
const cookieParser = require("cookie-parser");
const path = require("path");

// Use Middlewares
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

// Import Routes
const user = require("./routes/userRoute");

// Use Routes
app.use("/api/v1", user);

// Error Middleware
app.use(error);

module.exports = app;
