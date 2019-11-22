const mongoose = require('mongoose');

const User = mongoose.model('tb_usuario');
const utils = require('../utils');


module.exports = {
    //Metodo para buscar todos usuarios
    async findAll(req, res) {
        const { page = 1 } = req.query;
        const user = await User.paginate({}, { page, limit: 10 });
        return res.json(user);
    },
    // Buscar usuário por userLogin 
    async findByUserLogin(req, res) {
        if ( Object.keys(req.body).length > 0) {
            const user = await User.find({ userLogin: req.body.userLogin });
            const senha = utils.encrypt(req.body.userPassword);
            //const user_return = JSON.parse(user)
            if (user.length) {
                if (senha === user[0].userPassword) {
                    payload = {
                        "status_code": 200,
                        "message": "Usuário Localizado",
                        "payload": user
                    }
                }
                else {
                    payload = {
                        "status_code": 404,
                        "message": "Senha Inválida!",
                        "payload": ""
                    }
                }
            }
            else {
                payload = {
                    "status_code": 404,
                    "message": "Usuário não encontrado",
                    "payload": ""
                }
            }
        }
        else {
            payload = {
                "status_code": 404,
                "message": "Não informado o usuário e senha",
                "payload": ""
            }
        }

        return res.json(payload)
    },
    // Buscar usuários por ID
    async findById(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },
    //Metodo insert de usuários
    async userPost(req, res) {
        payload = {
            userName: req.body.userName,
            userLogin: req.body.userLogin,
            userPassword: utils.encrypt(req.body.userPassword),
            userEmail: req.body.userEmail
        }
        const user = await User.create(payload);
        return res.json(user);
    },
    //Metodo Update no Usuário
    async userPut(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.json(user);
    },
    async userDelete(req, res) {
        const user = await User.findByIdAndRemove(req.params.id);
        return res.json(user);
    }
}