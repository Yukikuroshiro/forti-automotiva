const Sequelize = require("sequelize");
const dbconfig = require("../config/database");

//Imports dos models
const Pedido = require("../models/Pedido");

const conexao = new Sequelize(dbconfig);

//Inicializa os models
Pedido.init(conexao);

//Inicializa os relacionamentos
Pedido.associate(conexao.models);