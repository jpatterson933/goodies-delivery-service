const router = require('express').Router();
//here we require each of our models and assign each one to its relevant class name
const { Products, Users, Cart, Address } = require('../models')
//here we require our withAuth that we will use to verify login credentials
const withAuth = require('../utils/auth')

//this router grabs our homepage - once the page loads it will end with a / and render the twentyone bootstraps handle
router.get('/', async (req, res) => {
    // res.render('homepage')
    res.render('twentyone')
})

// router.get('/login', async (req, res) => {
//     res.render('login')
// })

// router.get('/products', async (req, res) => {
//     res.render('products')
// })

//this route gets all of our products from 
router.get('/products', async (req, res) => {
    try {
        const productData = await Products.findAll();
        //we create a function and assign it to product
        const product = productData.map((products) => 
            products.get({ plain: true }));
            //here we render our products and assign our product function to it -- this is when we use the {{}} mustaches inside the handlebars template
        res.render('products', { product });
    } catch (err) {
        //console.log(err) is good to do if you keep getting an error message and you need to see exactly what the message is trying to tell you
        console.log(err);
        //it will respond with the status of 500 and the err in json format
        res.status(500).json(err);
    }
});

//this router grabs a specific product based off of its id - this is an async function
router.get('/products/:id', async (req, res) => {
    try {
        //here we find the product by going through the Products class and using findBy Product Key and inside req.params.id
        //becuase of the awaite, it will first execute this line before moving on to the next line
        const productId = await Products.findByPk(req.params.id);
        //here we the product id -- when you get({plain: true }): you are turning OFF the meta data that sequlize will nomrally return and only reutrning the product by the id entered
        const prodId = productId.get({ plain: true });
        //then we render the product handlebars page, and plug in the product that was searched for
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
    //when the login page is searched it will render the handlebars page login - nothing is assigned to it unlike the previoous two routes
    res.render('login');
  });

  //this router grabs our /profile and plugs in the withAuth function created in the utilities folder and required above
router.get('/profile', withAuth, async (req, res) => {
    try {
        //the user class is found by id and assigned to profile data - it is also finding the user in the current session
        const profileData = await Users.findByPk(req.session.user_id);
        //graps profile data WITHOUT metadata
        const profile = profileData.get({ plain: true });
        //render the profile.handlebars page and assigns the profile variable and we can then render the User class properties using {{}}
        res.render('profile',  profile );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

//this router is responsible for showing what appears on our homepage --its an async function
router.get('/homepage', async (req, res) => {
    try {
        //assigns Products in Product class to productData
        const productData = await Products.findAll();
        //the map creates a new array and calls the function for each element in that array
        const product = productData.map((products) => products.get({ plain: true }));
        //selects a random product from the array of products that we mapped
        const ranIndex = Math.floor(Math.random()*(product.length-1))
        console.log(ranIndex);
        //here we render our homepage.handlebars and plug in the random product that we grabbed
        res.render('homepage',  product[ranIndex] );
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/cart', (req, res) => {
    res.render('cart')
})

router.post('/cart', async (req, res) => {
    try {
        const cartData = await Cart.create(req.body);
        res.status(200).json(cartData);
    } catch (err) {
        res.status(400).json(err);
    }
})


// Create get route that has over21 boolean. If over21, then render /homepage. '/' route needs to be over21 page, and will redirect

router.get('/signup', (req, res) => {
    res.render('signup')
})


//this is our logout function that essentially destroys the dession
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      // Remove the session variables
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });



module.exports = router;