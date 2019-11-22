const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserControllers');

routes.get('/',(req, res) => {
    return res.send('Sistema de Gerenciamento de Empresa');
})

//Rota de Usuários
routes.get('/users', UserController.findAll);
routes.get('/users/:id', UserController.findById);
routes.post('/users', UserController.userPost);
routes.put('/users/:id', UserController.userPut);
routes.delete('/users/:id', UserController.userDelete);



module.exports = routes;