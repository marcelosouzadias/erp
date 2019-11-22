const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserControllers');
const EnderecoControllers = require('./controllers/EnderecoControllers');

const ClienteControllers = require('./controllers/ClientControllers');

routes.get('/',(req, res) => {
    return res.send('<h1>ERP - Sistema de Gerenciamento de Empresa</h1>');
})

//Rota de Usuários
routes.get('/users', UserController.findAll);
routes.get('/users/:id', UserController.findById);
routes.get('/users/login/:userLogin', UserController.findByUserLogin);
routes.post('/users', UserController.userPost);
routes.put('/users/:id', UserController.userPut);
routes.delete('/users/:id', UserController.userDelete);

routes.get('/enderecos',EnderecoControllers.findAll)
routes.post('/enderecos',EnderecoControllers.endPost)

routes.get('/clientes',ClienteControllers.findAll)
routes.post('/clientes',ClienteControllers.clientPost)

module.exports = routes;