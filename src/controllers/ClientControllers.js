const mongoose = require('mongoose');
const Client = mongoose.model('tb_cliente');

module.exports = {
    async findAll(req, res) {
        const { page = 1 } = req.query;
        const client = await Client.paginate({}, { page, limit: 10 });
        return res.json(client);
    },
    async clientPost(req, res) {
        payload = {
            clientName: req.body.clientName,
            clientCNPJ: req.body.clientCNPJ,
            clientEndereco: req.body.clientEndereco
        }
        const client = await Client.create(payload);
        return res.json(client);
    }
}

/*
const payloadEndereco = req.body.clientEndereco.forEach(element => {
    array = [];
    array.push({
        endLogadouro: element.endLogadouro,
        endNumero: element.endNumero,
        endComplemento: element.endComplemento,
        endBairro: element.endBairro,
        endCEP: element.endCEP,
        endCidade: element.endCidade,
        endEstado: element.endEstado,
        endUF: element.endUF
    });
    console.log(array)
    return array;
});
*/