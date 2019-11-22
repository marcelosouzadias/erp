const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = {
    //Metodo para buscar todos usuarios
    async findAll(req, res) {
        const { page = 1} = req.query;
        const user = await User.paginate({},{ page, limit: 10});
        return res.json(user);
    },
    // Buscar usuários por ID
    async findById(req, res) {
        const user = await User.findById(req.params.id);
        return res.json(user);
    },
    //Metodo insert de usuários
    async userPost(req, res) {
        const user = await User.create(req.body);
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