const router = require('express').Router();
router.get('/', (req, res) => {
    res.json({
        status: "Success",
        message: "Welcome to the typescript-express API"
    });
});
var productController = require('./Controllers/userController');
router.route('/products-name')
    .get(productController.getUsers)
    .post(productController.postUsers);
router.route('/products-name/:id')
    .get(productController.getUsersById)
    .put(productController.updateUsers)
    .delete(productController.deleteUsers);
module.exports = router;
//# sourceMappingURL=routesApi.js.map