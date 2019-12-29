const express = require("express");
const routes = express.Router();

// Middleware local
function checkTitleParam(req, res, next) {
  
  if (!req.body.title) {
    return res.status(400).json({ error: "Please specify product title" });
  }
  return next();
}

// Rotas
const ProductController = require("./controllers/ProductController");
routes.get('/products', ProductController.list);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.create);
routes.put('/products/:id', checkTitleParam, ProductController.update);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
