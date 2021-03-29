const router = require('express').Router();

router.get('/cart', async (req, res) => {
    res.render('cart')
})

module.exports = router;