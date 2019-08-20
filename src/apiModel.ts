const mongoose = require('mongoose');

const uri = 'http://localhost:27017';

mongoose.connect(uri);

var productModel = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: false
    },
    products: {
        product: String,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

export var products = mongoose.model('products', productModel);
module.exports.get = function(callback, limit) {
    products.find(callback).limit(limit);
}