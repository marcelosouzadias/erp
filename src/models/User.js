const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    userLogin:{
        type: String,
        required: true,
    },
    userPassword: {
        type: String,
        required: false,
    },
    userEmail: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

UserSchema.plugin(mongoosePaginate);
mongoose.model('tb_usuario', UserSchema);