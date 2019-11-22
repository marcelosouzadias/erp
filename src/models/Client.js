const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const endereco = require('./Endereco');

const endSchema = new mongoose.Schema(endereco.schema)

const ClientSchema = new mongoose.Schema({
    clientName: {
        type: String,
        required: false
    },
    clientCNPJ: {
        type: String,
        required: false
    },
    clientEndereco : [endSchema],
    createdAt: {
        type: Date,
        default: Date.now,
    } 
});

ClientSchema.plugin(mongoosePaginate);
mongoose.model('tb_cliente', ClientSchema);