const router = require('express').Router();
const productsApi = require('./products-api-grab');
const userRoutes = require('./userRoutes');
const addressRoutes = require('./addressRoutes');

router.use('/users', userRoutes);
router.use('/products', productsApi);
router.use('/address', addressRoutes);

module.exports = router;