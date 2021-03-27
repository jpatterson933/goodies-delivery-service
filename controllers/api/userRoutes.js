const router = require('express').Router();
const { Users } = require('../../models')


router.get('/', async (req, res) => {
    const userData = await User.findAll()
    res.json(userData) 
})


module.exports = router