const router = require('express').Router();

router.get('/signup', async (req, res) => {
    res.render('signup')
})

module.exports = router;