//our index route is the default route selected from the server.js file

//Here we require our router to set up the router through controllers
const router = require('express').Router();

//we grab our apiroutes folder, it will default to the index.js inside of that folder where we can connect the other routes 
const apiRoutes = require('./api');

//our home routes has a lot of the get and posts requests we will need for our site
const homeRoutes = require('./homeRoutes')

//this grabs our login and our signup routes
const login = require('./login')
const signup = require('./signup')
//this connects our homeroutes, apiroutes, login, and signup routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', login);
router.use('/signup', signup);

//we export our router to the server.js
module.exports = router;