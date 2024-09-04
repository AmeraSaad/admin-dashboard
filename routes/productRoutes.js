const express = require("express");

const router = express.Router();

const controller = require("../controllers/products.controller.js");

const base = "/products";

router.get(base, controller.indexController);

router.get(`${base}/create`, controller.renderCreateView);

router.post(`${base}/create`, controller.createProduct);

// product update 
router.get(`${base}/:id/update`, controller.renderUpdateView);

// product update
router.post(`${base}/:id/update`, controller.updateProduct);

//delete
router.get(`${base}/:id/delete`, controller.deleteProduct);

module.exports = router;
