//------------------this will be responsible for grabbing our json products and displaying them-------------//

const { response } = require('express');
const products = require('../../seeds/products.json')

const grabProducts = () => {
    fetch (products)
        .then(res => {
            return res.json()
        })
        .then(results => {

            for (let i = 0; i < results.length; i++) {
                console.log(results[i])
            }

        })
        .catch(err => console.error(err));
                
}


// grabProducts()



