const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando APP
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando DB
mongoose.connect("mongodb://mongo:27017/nodeapi", {
  useNewUrlParser: true
});
requireDir("src/models");

// Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
