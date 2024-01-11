const express = require('express');
const { consultaCliente } = require('../controller/controller');
const rotas = express();

rotas.get("/", consultaCliente)





module.exports = rotas;