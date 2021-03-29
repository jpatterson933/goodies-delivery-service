//------------------------USED FOR GRABBING PRODUCTS --- NO ASSOCIATED ROUTES YET--------------------//
const router = require('express').Router();

const axios = require('axios').default;
const { Products } = require('../../models');

router.get('/', async (req, res) => {
    const productsData = await Products.findAll(
        {
            name: req.body.name,
            thc: req.body.thc,
            cbd: req.body.cbd,
            price: req.body.price
        },
    ).catch((err) => {
        res.json(err);
    });
    //here I am able to post the array index 1
    res.json(productsData[3]);
});

//creates new products we do not need
// router.post('/', async (req, res) => {
//     try {
//         const productsData = await Products.create(req.body);
//         res.status(200).json(productsData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
//     res.render('products')
// })




// axios.get('https://api.github.com/orgs/axios')
//   .then(response => {
//     console.log(response.data);
//   }, error => {
//     console.log(error);
//   });

//an object 
// const options = {
//     method: 'GET',
//     url: 'https://neobi.p.rapidapi.com/api/products',
//     params: {rev: 'v1.9', count: '6', htmlDescription: '0', page: '1'},
//     headers: {
//       'x-rapidapi-key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312',
//       'x-rapidapi-host': 'neobi.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {

//         for (let i = 0; i < response.data.length; i++) {       
       
//       }
//       // console.log(response.data)
    
//     //   console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

  module.exports = router