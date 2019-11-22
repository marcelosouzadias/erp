const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando a APP
const app = express();

//utilizar o formado dos dados em JSON request
app.use(express.json());
app.use(cors());

//const url_mongo = 'mongodb://localhost:27017/erp';
const url_mongo = 'mongodb+srv://user-erp:Mototaxidoamor12@cluster0-q76gs.mongodb.net/erp?retryWrites=true&w=majority';


// Iniciando o Mongo
mongoose.connect(url_mongo, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Iniciando os Models
requireDir('./src/models');

// Gerenciamento de Rotas
app.use('/', require('./src/routes'));



app.listen(3001);

