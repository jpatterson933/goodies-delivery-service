const router = require('express').Router();
const { Users } = require('../../models')


router.get('/', async (req, res) => {
    const userData = await Users.findAll()
    res.json(userData) 
})

router.post('/', async (req, res) => {
    try {
      const userData = await Users.create(req.body);

      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;

      res.status(200).json(userData);
      });
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
  });

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({ where:{ email: req.body.email} });
    if (!userData) {
      res.status(400).json({message: 'incorrect email or password'});
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message:'incorrect email or password'});
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are logged in. BLAZE IT!'});
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


//this will be our call to logout.js route when we 
//make one so the user will be able to logout and end their session.
// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() =>{
//       res.status(204).end();
//     });
//   }else {
//     res.status(404).end();
//   }
// });

//   router.get('/', async (req, res) => {
//     const userData = await Users.findAll()
//     res.json(userData) 
// })

module.exports = router