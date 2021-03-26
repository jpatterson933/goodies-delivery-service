const router = require('express').Router();
const productsApi = require('./products-api-grab')

router.use('/products', productsApi)
module.exports = router;
