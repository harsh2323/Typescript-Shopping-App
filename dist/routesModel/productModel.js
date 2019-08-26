const mongoose = require('mongoose');
var ObjectIdSchema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;
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
        type: String,
        required: false
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
var products = module.exports = mongoose.model('products', productModel);
module.exports.get = function (callback, limit) {
    products.find(callback).limit(limit);
};
//# sourceMappingURL=productModel.js.map