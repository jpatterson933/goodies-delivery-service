const router = require('express').Router();
const { Users } = require('../../models')


router.get('/', async (req, res) => {
    const userData = await Users.findAll()
    res.json(userData) 
})


module.exports = router