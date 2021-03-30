/*---this file is responsible for grabbing our addresses and posting new addresses when they are created */

const router = require('express').Router();
//here we import our Address model
const { Address } = require('../../models')

//this route grabs all of our addresses and puts them into addressData that can display into a res.json format
router.get('/', async (req, res) => {
    const addressData = await Address.findAll()
    res.json(addressData) 
})

//this router is responsible for posting new addresss when they are created
router.post('/', async (req, res) => {
    try {
      //this will assign the address that is created in the req.body to addressData
      const addressData = await Address.create(req.body);
      //when it is done correctly, it will post a status of 200 and show us the addressData in json format
      res.status(200).json(addressData);
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
  });


module.exports = router