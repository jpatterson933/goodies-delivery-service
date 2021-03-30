/*----this page is responsible for grabbing our user-- it renders our signup page -- might be able to get ride of lines 10-19 */

const router = require('express').Router();
//grabs our Users model
const { Users } = require('../models')

//renders our signup page
router.get('/signup', async (req, res) => {
    res.render('signup')
})

//irrelevant router -- might be able to delete but will check back once commenting is finished
router.get('/users', async (req, res) => {
    try {
        //again we find all of the users in the Users model - assign it to userData
        const userData = await Users.findAll();
        //then we map all of the users in an array and create a function that grabs the users WITHOUT the metadata
        const user = userData.map((users) => users.get({ plain: true }));
        //then we render the users.handlebars and assign the user variable to it
        res.render('users', { user });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;