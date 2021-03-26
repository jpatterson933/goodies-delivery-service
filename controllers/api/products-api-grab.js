//------------------------USED FOR GRABBING PRODUCTS --- NO ASSOCIATED ROUTES YET--------------------//


const axios = require('axios').default;
require('dotenv').config();

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
    params: {rev: 'v1.9', count: '6', htmlDescription: '0', page: '1'},
    headers: {
      'x-rapidapi-key': '3ae9d6acaemshb175628a0959ccfp18deb7jsn8c86242e0312',
      'x-rapidapi-host': 'neobi.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {

        for (let i = 0; i < response.data.length; i++) {       
       
      }
      console.log(response.data)
    
    //   console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });