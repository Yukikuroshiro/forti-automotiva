const express = require("express");

const pecasController = require("./controllers/pecas");

const routes = express.Router();

//Configuração da rota
routes.get("/pecas", pecasController.listarPedido);

routes.post("/pecas", pecasController.criarPedido);

module.exports = routes;