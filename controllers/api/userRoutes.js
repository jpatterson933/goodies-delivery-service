const router = require('express').Router();
const { User } = require('../../models')


router.get('/', async (req, res) => {
    const userData = await User.findAll()
    res.json(userData) 
})


module.exports = router