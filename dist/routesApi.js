const router = require('express').Router();
router.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to the typescript-express API"
    });
});
var productController = require('./Controllers/queries');
router.route('/products-name')
    .get(productController.getUsers)
    .post(productController.postUsers);
module.exports = router;
//# sourceMappingURL=routesApi.js.map