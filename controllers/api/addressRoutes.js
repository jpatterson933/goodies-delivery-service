const router = require('express').Router();
const { Address, Users } = require('../../models')
router.get('/', async (req, res) => {
    const addressData = await Address.findAll()
    res.json(addressData) 
})
router.post('/', async (req, res) => {
    try {
      const addressData = await Address.create(req.body);
      res.status(200).json(addressData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
<<<<<<< HEAD


=======
>>>>>>> d137286075f64771722f8b6d35d157bb7ee77f23
module.exports = router