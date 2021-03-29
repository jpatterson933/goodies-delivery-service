//------------------this will be responsible for grabbing our json products and displaying them-------------//


const products = require('../../seeds/products.json');

const displayProd = () => {
    let cardProd = document.getElementById("#thc")

    let productList = {
        "products": products
    }
    
    console.log(productList.products[0])

    cardProd.innerHTML = productLIst.products[0].thc
    
}

displayProd();



// for (let i = 0; i < productList.products.length; i++){

//     let name = document.querySelector('#name');
//     let disThc = document.querySelector('#thc');
//     let disCbd = document.querySelector('#cbd');
//     let disPri = document.querySelector('#price');
//     let disWei = document.querySelector('#weight');
//     let disBra = document.querySelector('#brand');
//     let disPro = document.querySelector('#producer');

//     name.text(productList.products[i].name)
//     disThc.text(productList.products[i].thc) 
//     disCbd.text(productList.products[i].cbd) 
//     disPri.text(productList.products[i].price) 
//     disWei.text(productList.products[i].weight) 
//     disBra.text(productList.products[i].brand) 
//     disPro.text(productList.products[i].producer)
    
// }

// console.log(productList.products[1].thc)

// document.querySelector('#thc').text(productList.products[1].thc)

async function viewProducts(event) {
    event.preventDefault();

    const response = await fetch(`/api/products`, {
        method: 'GET',
        body: JSON.parse({
            name,
            thc,
            cbd,
            price,
            weight,
            brand,
            producer,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/products')
    } else {
        console.log('failed')
    }   
}




