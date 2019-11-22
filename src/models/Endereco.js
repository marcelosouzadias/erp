const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EnderecoSchema = new mongoose.Schema({
    endLogadouro : {
        type: String,
        required: false,
        lowercase: true
    },
    endNumero : {
        type: String,
        required: false
    },
    endComplemento : {
        type: String,
        required: false,
        lowercase: true
    },
    endBairro : {
        type: String,
        required: false,
        lowercase: true
    },
    endCEP : {
        type: String,
        required: false
    },
    endCidade : {
        type: String,
        required: false,
        lowercase: true
    },
    endEstado : {
        type: String,
        required: false,
        lowercase: true
    },
    endUF : {
        type: String,
        required: false,
        uppercase: true
    }
});

EnderecoSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('tb_endereco', EnderecoSchema);

//module.exports = mongoose.models.Endereco || mongoose.model('Endereco', EnderecoSchema);


