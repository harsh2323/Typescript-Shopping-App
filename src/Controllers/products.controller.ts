import { Request, Response } from 'express';

const prod = require('../routesModel/productModel');

// Handles Index actions
exports.index = function(req: Request, res: Response) {
    prod.get(function(err: Error, prods){
        if(err) {
            res.json({
                status: 'error',
                message: 'error'
            })
        }
        res.json({
            status: 'success',
            message: 'Successfully retrieved products',
            data: prods
        })
    })
}

// Handles new product creation
exports.newProduct = function (req: Request, res: Response, next) {
    var prods = new prod();
    prods.name = req.body.name ? req.body.name : prods.name;
    prods.email = req.body.email;
    prods.phone = req.body.phone;
    prods.products = req.body.products;

    prods.save(function(err: Error){
        if(err) {
            res.json(err)
            next();
        }
        res.json({
            status: 'Success',
            message: 'Successfully saved the products',
            data: prods
        })
    })
}

// Handles product view info
exports.view = function(req: Request, res: Response) {
    prod.findById(req.params.product_id, function(err: Error, prod) {
        if(err) {
            res.json(err)
        }
        res.json({
            status: 'Success',
            data: prod
        })
    })
}

// Handles Deletion of products
exports.delete = function(req: Request, res: Response) {
    prod.remove({
        id: req.params.product_id
    },
    function(err: Error, prods) {
        if(err) {
            res.json({
                status: 'Error',
                message: 'Error'
            })
        }
        res.json({
            status: 'Success',
            message: 'product deleted successfully'
        })
    })
}

// Handles Updating of products
exports.update = function(req: Request, res: Response) {
    prod.findById(req.params.product_id, function(err: Error, prods) {
        if(err) {
            res.json({
                status: 'Error',
                message: 'Error'
            })
        }
        prod.name = req.params.name ? req.params.name : prod.name;
        prod.email = req.params.email;
        prod.phone = req.params.phone;
        prod.products = req.params.products;

        res.json({
            status: 'Success',
            message: 'Updated product information successfully',
            data: prod
        })
    })
}