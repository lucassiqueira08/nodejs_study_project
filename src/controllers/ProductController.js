const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
  async list(req, res) {
    const { page = 1 } = req.query;
    let products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },

  async show(req, res) {
    let product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async create(req, res) {
    let product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    let product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  },

  async delete(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  }
};
