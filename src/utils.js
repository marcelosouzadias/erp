const crypto = require("crypto");
//const cipher = crypto.createCipher();

require('dotenv').config();

//const crypto = require("crypto");

module.exports = {
    encrypt(text) {
        const cipher = crypto.createCipher(process.env.UTIL_ALGORITHM, process.env.UTIL_SECRET);
        cipher.update(text);
        return cipher.final(process.env.UTIL_TYPE);
    },
    decrypt(text){
        const decipher = crypto.createDecipher(process.env.UTIL_ALGORITHM, process.env.UTIL_SECRET);
        aux = decipher.update(text, process.env.UTIL_TYPE, process.env.UTIL_ENCODING);
        aux += decipher.final();
        return aux
    }
}