const router = require('express').Router();
const { Users } = require('../../models')


router.get('/', async (req, res) => {
    const userData = await Users.findAll()
    res.json(userData) 
})

router.post('/', async (req, res) => {
     
      console.log(req.body)

      Users.create(req.body).then(response => {

        req.session.save(() => {
          req.session.user_id = response.id;
          req.session.logged_in = true;

          console.log(response.id)

        res.status(200).json(response) 
        
      })
        
      }).catch (err => {
      console.log(err)
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    });

  });


  router.post('/login', async (req, res) => {
    try {
      console.log(req.body)
      // Find the user who matches the posted e-mail address
      const userData = await Users.findOne({ where: { email: req.body.email } });
      console.log(userData)
      if (!userData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      // Verify the posted password with the password store in the database
      const validPassword = await userData.checkPassword(req.body.password);
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
      // Create session variables based on the logged in user
      req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
        res.json({ user: userData, message: 'You are now logged in!' });
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });


module.exports = router