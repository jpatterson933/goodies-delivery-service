const router = require('express').Router();
const productsApi = require('./productRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/products', productsApi);

module.exports = router;
