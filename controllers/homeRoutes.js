const router = require('express').Router();
const { Products } = require('../models')

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

// router.get('/products/:id', async (req, res) => {
//     try {
//         const productId = await Products.findByPk(req.params.id, {
//             include: [
//                 {
//                     model: Products,
//                     attributes: [
//                         'id',
//                         'name',
//                         'thc',
//                         'cbd',
//                         'price',
//                         'weight',
//                     ],
//                 },
//             ],
            
//         });

//         const prodId = productId.get({ plain: true });
//         res.render('products', { prodId });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }

// });
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

router.get('/cart', (req, res) => {
    res.render('cart')
})
  

module.exports = router;