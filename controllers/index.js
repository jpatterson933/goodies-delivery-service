const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const login = require('./login')

//this connects our homeroutes
router.use('/', homeRoutes);

router.use('/api', apiRoutes);

router.use('/login', login);

module.exports = router;