const router = require('express').Router();

router.get('/products', async (req, res) => {
    res.render('products')
})

module.exports = router;