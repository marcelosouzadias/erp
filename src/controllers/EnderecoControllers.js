const mongoose = require('mongoose');
const Endereco = mongoose.model('tb_endereco');

module.exports = {
    async findAll(req, res) {
        const { page = 1 } = req.query;
        const endereco = await Endereco.paginate({}, { page, limit: 10 });
        return res.json(endereco);
    },
    async endPost(req, res) {
        payload = {
            endLogadouro : req.body.endLogadouro,
            endNumero : req.body.endNumero,
            endComplemento : req.body.endComplemento,
            endBairro : req.body.endBairro,
            endCEP : req.body.endCEP,
            endCidade : req.body.endCidade,
            endEstado : req.body.endEstado,
            endUF : req.body.endUF
        }
        const endereco = await Endereco.create(payload);
        return res.json(endereco);
    }
}