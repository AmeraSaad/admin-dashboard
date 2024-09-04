const express = require("express");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "pug");

// Local Imports
const mvcRoutes = require("./routes/mvcRoutes.js");
const productsRouter = require("./routes/productRoutes.js");
const connectDB = require('./db.js');

//Middleware
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended: true }));
app.use("/", mvcRoutes, productsRouter);

connectDB();

app.listen(PORT, () => {
  console.log(`Server started at http://localhost: ${PORT}`);
});


// users => {id, username, password, email, adress, phone_number, wishlist, role}
// cat => {id, title, img_url, desc}
// products => {id, title, price, stock, expired_date, main_image, images: [], description, properties: [objectid]}
// properties => {id, key, value}
// orders => {id, user_id, products: [Objectid], adress, traking_phonenumber, payment_mathod, status},
// UserReacts => {id, user_id, product_id, comment, rate}
//
//tailwind installing:
//npm install -D tailwindcss postcss autoprefixer
//npx tailwindcss init -p
