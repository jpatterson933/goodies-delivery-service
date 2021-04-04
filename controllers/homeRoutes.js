const router = require('express').Router();
const { Products, Users, Cart, Address } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    res.render('twentyone')
})

router.get('/products', async (req, res) => {
    try {
        const productData = await Products.findAll();
        const product = productData.map((products) => products.get({ plain: true }));
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
    res.render('login');
  });
router.get('/profile', withAuth, async (req, res) => {
    try {
        const profileData = await Users.findByPk(req.session.user_id, {
            include: [{ model: Address}]
          });
        const profile = profileData.get({ plain: true });
        console.log(profile)
        res.render('profile',  profile );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/homepage', async (req, res) => {
    try {
        const productData = await Products.findAll();
        const product = productData.map((products) => products.get({ plain: true }));
        const ranIndex = Math.floor(Math.random()*(product.length-1))
        console.log(ranIndex);
        res.render('homepage',  product[ranIndex] );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/contact', (req, res) => {
    res.render('contact')
})

router.post('/wishlist', async (req, res) => {
    try {
        console.log(req.body);
        console.log('hello')
        const id = parseInt(req.body.id)
        const cartData = await Cart.create( {products_id: id, users_id:req.session.user_id} );
        res.status(200).json(cartData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/aboutus', (req, res) => {
    res.render('aboutus')
})

router.get('/viewnugs', (req, res) => {
    res.render('viewnugs')
})

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

router.get('/wishlist', async (req, res) => {
    try {
        const userData = await Users.findByPk(req.session.user_id, {
            include: [{ 
                model: Products,
                through: Cart, 
                as: 'products'
            }]
        });
        //you can looop through user.products and add the prices together, it will give us the total
        //once you get that total, you can say products.total products: products.total
        
        console.log(userData)
            if (!userData) {
                res.render('emptycart')
                // res.status(404).json({ message: 'No cart found with this id!' });
                return;
            }
        const user = userData.get({ plain: true });

        res.render('cart', {products: user.products})
            } catch (err) {
                res.status(500).json(err);
                console.log(err)
            }
});

  router.get('/checkout', async (req, res) => {
    try {
        const userData = await Users.findByPk(req.session.user_id, {
            include: [{ 
                
                    model: Products,
                    through: Cart, 
                    as: 'products'
                  },
                {model:Address
              }]
          });
          //you can looop through user.products and add the prices together, it will give us the total
          //once you get that total, you can say products.total products: products.total
          if (!userData) {
              res.status(404).json({ message: 'No cart found with this id!' });
              return;
            }
            const user = userData.get({ plain: true });
            console.log(user)

          res.render('checkout', user)
              } catch (err) {
                  res.status(500).json(err);
                  console.log(err)
              }
});



module.exports = router;