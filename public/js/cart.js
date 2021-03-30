const { Products } = require('../../models');

//this is for Tim
const cart = [];

$('#add-to-cart').click(function(event) {
    event.preventDefault();
    
    const productId = document.querySelector("#add-to-cart").value.trim();
    const query = `/api/products/${productId}`

    fetch(query, {
        method: 'POST',
        body: JSON.stringify({
            name: req.body.name,
            price: req.body.price,
        }),
        headers: {'Content-Type': 'application/json'},
    }).then(response => {



        console.log(response)
        return response.json();
        
    })
  });


  // Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data), // body data type must match "Content-Type" header
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });