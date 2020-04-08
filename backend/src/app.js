const express = require("express");
const app = express();
const cors = require('cors');
const {errors} = require('celebrate');

const routes = require('./routes');

//  - DEFINE QUE IREI UTILIZAR JSON COMO CORPO DE REQUISICAO
app.use(cors())
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 *  rota / recurso 
 */

/**
 * Metodo http:
 * 
 * GET: bucar uma informacao do backend
 * POST: Criar uuma informacao no backend
 * PUT: Alterar uma informacao no backend
 * DELETE: Excluir uma informacao no backend
 *
 */

/**
 * Tipos de paramatros
 * 
 * Query Params: Prametros npmeados enviados na rota apos o "?" (Filtros, paginacao,)
 * Route Params: Parametros utilisados para identificar recursos (/user/:id)
 * Request body: Corpo da requisicao, utilizado para criar ou atualizar recursos
 */

//  # Acessar os parametros dentro de query (passados via query)
//  app.get("/user", (req, res) => {
//  const params = req.query;
//  console.log(params);
//  ...

//  # Acessar os Route Params
//  app.get("/user:id", (req, res) => {
//  const params = req.params;
//  console.log(params);
//  ...

//  # Acessar os Route Params
//  app.post("/user", (req, res) => {
//  const params = req.body;
//  console.log(params);
//  ...

module.exports = app;