/*---when the the index.js inside of controllers requires the api folders - it will automatically default to THIS index.js file ---*/

//require the express router
const router = require('express').Router();
//we grab the api for our products
// const productsApi = require('./products-api-grab');
//we grab the api for our users
const userRoutes = require('./userRoutes');
//we grab the api for our address
const addressRoutes = require('./addressRoutes')

//these three lines of code make sure that we use each of those routes for the pre defined url
router.use('/users', userRoutes);
// router.use('/products', productsApi);
router.use('/address', addressRoutes)

module.exports = router;
