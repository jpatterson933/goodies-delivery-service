/*-----this page is repsonsible for rendering our login page----- */

const router = require('express').Router();

router.get('/login', async (req, res) => {
    res.render('login')
})

module.exports = router;