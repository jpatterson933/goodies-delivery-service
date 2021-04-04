// ------------------this will be responsible for grabbing our json products and displaying them-------------//

const showProducts = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#product-name').node.trim();
    const thc = document.querySelector('#thc-content').value.trim();
    const cbd = document.querySelector('#cbd-content').value.trim();
    const price = document.querySelector('#product-price').value.trim();
    const weight = document.querySelector('#product-weight').value.trim();
    const brand = document.querySelector('#brand').value.trim();
    const producer = document.querySelector('#producer').value.trim();
    
    if (name && thc && cbd && price && weight && brand && producer) {
        const response = await fetch(`/api/products`, {
            method: 'GET',
            body: JSON.parse({ name, thc, cbd, price, wieght, brand, producer }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/products')
        } else {
            alert('Testing')
        }
    }
}

document
    .querySelector('.display-products')
    .addEventListener('click', showProducts)

grabProducts()