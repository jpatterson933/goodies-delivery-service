const router = require('express').Router(); 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const login = require('./login');
const signup = require('./signup');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', login);
router.use('/signup', signup);

module.exports = router;