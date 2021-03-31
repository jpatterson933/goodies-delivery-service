//------------------------USED FOR GRABBING PRODUCTS --- will also grab our products below--------------------//
const router = require('express').Router();

const axios = require('axios').default;
//grab our Products model
const { Products } = require('../../models');

//this route will grab all of our products and assign them to productsData
router.get('/', async (req, res) => {
  const productsData = await Products.findAll()
  res.json(productsData) 
})




/*-------------------------------------THIS IS AXIOS AND IS RESONSIBLE FOR GRABBING NEW PRODUCTS TO ADD TO OUR SEEDS FILE-------------------- */
// axios.get('https://api.github.com/orgs/axios')
//   .then(response => {
//     console.log(response.data);
//   }, error => {
//     console.log(error);
//   });

//an object 
const options = {
    method: 'GET',
    url: 'https://neobi.p.rapidapi.com/api/products',
    params: {rev: 'v1.9', count: '50', htmlDescription: '0', page: '1'},
    headers: {
      'x-rapidapi-key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312',
      'x-rapidapi-host': 'neobi.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {       
          console.log("------new line------")
          console.log(response.data[i].name)
          console.log(response.data[i].image)
          console.log(response.data[i].thc)
          console.log(response.data[i].price)
          console.log(response.data[i].brand)
      }
      
      // console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

  module.exports = router