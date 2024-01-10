const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  trackingNumber: {
    type: String,
    default: "user",
  },
  images: [
    {
      type: String,
      required: true,
    },
  ],
  label: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Users",
  },
  invoice: {
    type: String,
    default: "invoice",
  },
  status: {
    type: String,
    default: "Processing",
  },
  packProducts: {
    type: Number,
    default: 0,
  },
  carton: {
    type: Number,
    required: true,
  },
  container: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  deliveredAt: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Products", productSchema);
