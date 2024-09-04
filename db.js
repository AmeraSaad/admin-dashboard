const mongoose = require("mongoose");
require('dotenv').config();

const db_url = process.env.MONGODB_URI

async function connectDB() {
  try {
    await mongoose.connect(db_url, {
      dbName: "e-commerce",
    });
    console.log("Connect to ecommerce db");
  } catch (err) {
    console.error(err);
  }
}

module.exports = connectDB;
