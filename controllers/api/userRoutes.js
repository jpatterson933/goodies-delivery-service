//grab our express router
const router = require('express').Router();
//import our Users model to use
const { Users } = require('../../models')

//this route will grab all of the users and aswign the users to userData and spits it out into res.json() format
router.get('/', async (req, res) => {
    const userData = await Users.findAll()
    res.json(userData) 
})

//this oute is a post route that will 
router.post('/', async (req, res) => {
     
      console.log(req.body)
      //this will create a new user in req.body

      Users.create(req.body)
      //promise that will return response

      .then(response => {
        //this creates data -- session is used to store and retrieve data under the hood to which it is not visible to the client
        req.session.save(() => {
          //this assings our response.id to suer id (response.id is the id associated with the )
          req.session.user_id = response.id;
          //this is saying our logged_in session will be true
          req.session.logged_in = true;

          console.log(response.id)
        //if everything is
        res.status(200).json(response) 
        
      })
        
      }).catch (err => {
      console.log(err)
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    });

});

//this rout is repsonsible for the user logging in
router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    // Find the user who matches the posted e-mail address
    const userData = await Users.findOne({ where: { email: req.body.email } });
    console.log(userData)
    if (!userData) {
      //will display status message of 400 if the email and password don't match
      res.status(400)

        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      //status message of 400
      res.status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    // Create session variables based on the logged in user
    req.session.save(() => {
      //creae a session variable                           
      req.session.user_id = userData.id;
      //create a session variable for being logged_in
      req.session.logged_in = true;
      //our json message letting the user know they are logged in
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    //if everything goes wrong, it will throw this err
    res.status(400).json(err);
  }
});


module.exports = router