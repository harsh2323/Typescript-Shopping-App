const prod = require('../routesModel/productModel');
exports.index = function (req, res) {
    prod.get(function (err, prods) {
        if (err) {
            res.json({
                status: 'error',
                message: 'error'
            });
        }
        res.json({
            status: 'success',
            message: 'Successfully retrieved products',
            data: prods
        });
    });
};
exports.newProduct = function (req, res, next) {
    var prods = new prod();
    prods.name = req.body.name ? req.body.name : prods.name;
    prods.email = req.body.email;
    prods.phone = req.body.phone;
    prods.products = req.body.products;
    prods.save(function (err) {
        if (err) {
            res.json(err);
            next();
        }
        res.json({
            status: 'Success',
            message: 'Successfully saved the products',
            data: prods
        });
    });
};
exports.view = function (req, res) {
    prod.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.json(err);
        }
        res.json({
            status: 'Success',
            data: prod
        });
    });
};
exports.delete = function (req, res) {
    prod.remove({
        id: req.params.product_id
    }, function (err, prods) {
        if (err) {
            res.json({
                status: 'Error',
                message: 'Error'
            });
        }
        res.json({
            status: 'Success',
            message: 'product deleted successfully'
        });
    });
};
exports.update = function (req, res) {
    prod.findById(req.params.product_id, function (err, prods) {
        if (err) {
            res.json({
                status: 'Error',
                message: 'Error'
            });
        }
        prod.name = req.params.name ? req.params.name : prod.name;
        prod.email = req.params.email;
        prod.phone = req.params.phone;
        prod.products = req.params.products;
        res.json({
            status: 'Success',
            message: 'Updated product information successfully',
            data: prod
        });
    });
};
//# sourceMappingURL=products.controller.js.map