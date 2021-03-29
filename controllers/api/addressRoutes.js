const router = require('express').Router();

const { Address } = require('../../models')


router.get('/', async (req, res) => {
    const addressData = await Address.findAll()
    res.json(addressData) 
})

router.post('/', async (req, res) => {
    try {
      const addressData = await Address.create(req.body);
      res.status(200).json(addressData);
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
  });


module.exports = router