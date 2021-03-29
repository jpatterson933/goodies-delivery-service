const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const login = require('./login')
const signup = require('./signup')

//this connects our homeroutes
router.use('/', homeRoutes);


//grabs all of our api routes
router.use('/api', apiRoutes);

router.use('/login', login);

router.use('/signup', signup);

module.exports = router;