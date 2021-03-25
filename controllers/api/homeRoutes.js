const router = require('express').Router();

router.get('/', async (req, res) => {
  // Send the rendered Handlebars.js template back as the response
//   res.render('homepage');
    console.log('test')
});

module.exports = router;