//our index route is the default route selected from the server.js file

//Here we require our router to set up the router through controllers
const router = require('express').Router(); 
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const login = require('./login')
const signup = require('./signup')
//this connects our homeroutes, apiroutes, login, and signup routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', login);
router.use('/signup', signup);

//we export our router to the server.js
module.exports = router;