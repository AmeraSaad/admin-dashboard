const productModel = require("../models/proudct.model.js");
const GenericMethods = require("../models/generic.model.js");

const productMethods = new GenericMethods(productModel);

const indexController = async (req, res) => {
  const products = await productMethods.getAll();
  res.status(200).render("products", { products });
};

const renderCreateView = async (req, res) => {
  res.status(200).render("products/create");
};

const createProduct = async (req, res) => {
  try {
    const data = req.body;
    await productMethods.create(data);
    res.status(200).redirect("/products");
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};


// Update render
const renderUpdateView = async (req, res) => {
  try {
    const product = await productMethods.getById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).render("products/update", { product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Error fetching product", error });
  }
};


// Update 
const updateProduct = async (req, res) => {
  try {
    const { title, description, stock, expired } = req.body;
    await productMethods.update(req.params.id, {
      title,
      description,
      stock,
      expired,
    });
    res.status(200).redirect("/products");
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

// delete
const deleteProduct = async (req, res) => {
  try {
    await productMethods.delete(req.params.id);
    res.status(200).redirect("/products");
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

module.exports = {
  indexController,
  renderCreateView,
  createProduct,
  renderUpdateView,
  updateProduct,
  deleteProduct,
};
