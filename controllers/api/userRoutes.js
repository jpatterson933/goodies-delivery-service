const router = require('express').Router();
const { Users } = require('../../models')


router.get('/', async (req, res) => {
    const userData = await Users.findAll()
    res.json(userData) 
})

router.post('/', async (req, res) => {
     
      console.log(req.body)

      Users.create(req.body).then(response => {
        res.status(200).json(response);
        
      }).catch (err => {
      console.log(err)
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    });

  });


module.exports = router