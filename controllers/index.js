const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const login = require('./login')
const products = require('./products')


//this connects our homeroutes
router.use('/', homeRoutes);

//this connects us to our homeroutes
router.use('/api', apiRoutes);

//this connects us with our login page
router.use('/login', login);

//connects our products page
router.use('/products', products)

module.exports = router;