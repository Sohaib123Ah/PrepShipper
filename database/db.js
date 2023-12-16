const mongoose = require("mongoose");

const mongooseConction = () => {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB: ", error);
    });
};

module.exports = mongooseConction;
