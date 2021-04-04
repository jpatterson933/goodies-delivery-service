const router = require('express').Router();
const { Products } = require('../../models');

router.get('/', async (req, res) => {
  const productsData = await Products.findAll()
  res.json(productsData) 
});

module.exports = router