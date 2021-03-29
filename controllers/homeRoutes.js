const router = require('express').Router();
const { Products, Users, Cart, Address } = require('../models')

router.get('/', async (req, res) => {
    res.render('homepage')
    res.render('twentyone')
})

// router.get('/login', async (req, res) => {
//     res.render('login')
// })

// router.get('/products', async (req, res) => {
//     res.render('products')
// })


router.get('/products', async (req, res) => {
    try {
        const productData = await Products.findAll();
        const product = productData.map((products) => 
            products.get({ plain: true }));
        res.render('products', { product });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.get('/products/:id', async (req, res) => {
    try {
        const productId = await Products.findByPk(req.params.id);

        const prodId = productId.get({ plain: true });
        res.render('product',  prodId );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/profile');
    //   return;
    // }
  
    res.render('login');
  });

router.get('/profile', (req, res) => {
    res.render('profile')
})

// this is all our cart stuff 
router.get('/cart', (req, res) => {
    console.log(data.products);
  return res.json(data.products);
});

router.post('/cart', (req, res) => {
    let products = [], id = null;
    let cart = JSON.parse(req.body.cart);
    if (!cart) return res.json(products)
    for (var i = 0; i < data.products.length; i++) {
        id = data.products[i].id.toString();
        if (cart.hasOwnProperty(id)) {
            data.products[i].qty = cart[id]
            products.push(data.products[i]);
        }
    }
    return res.json(products);
});
//update cart item 
// router.update('/cart', async (req, res) => {
// })
// //delete cart item
// router.delete('/cart', async (req,res) => {
// })


// Create get route that has over21 boolean. If over21, then render /homepage. '/' route needs to be over21 page, and will redirect

router.get('/signup', (req, res) => {
    res.render('signup')
})

  

module.exports = router;