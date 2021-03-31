/*---this file is responsible for grabbing our addresses and posting new addresses when they are created */

const router = require('express').Router();
//here we import our Address model
const { Address, Users } = require('../../models')

//this route grabs all of our addresses and puts them into addressData that can display into a res.json format
router.get('/', async (req, res) => {
    const addressData = await Address.findAll()
    res.json(addressData) 
})

//this router is responsible for posting new addresss when they are created
router.post('/', async (req, res) => {
    try {
      //this will assign the address that is created in the req.body to addressData
      const addressData = await Address.create(req.body);
      //when it is done correctly, it will post a status of 200 and show us the addressData in json format
      res.status(200).json(addressData);
    } catch (err) {
      // 400 status code means the server could not understand the request
      res.status(400).json(err);
    }
  });

  // router.get('/profile', async (req, res) => {
  //   try {
  //       const userData = await Users.findByPk(req.session.user_id, {
  //           include: [{ 
  //               model: Users,
  //               through: Address, 
  //               as: 'users'
  //             }]
  //         });
          //you can looop through user.products and add the prices together, it will give us the total
          //once you get that total, you can say products.total products: products.total
          
//           console.log(userData)
//               if (!userData) {
//                   res.status(404).json({ message: 'No cart found with this id!' });
//                   return;
//               }
//           const user = userData.get({ plain: true });

//           res.render({address: user.address })
//               } catch (err) {
//                   res.status(500).json(err);
//                   console.log(err)
//               }
// });

// router.post('/profile', async (req, res) => {
//   try {
//       console.log(req.body);
//       console.log('hello')
//       const id = req.body.id
//       const addressData = await Address.create( {address_street: id, users_id:req.session.user_id} );

//       res.status(200).json(addressData);
  
//   } catch (err) {
//       res.status(400).json(err);
//   }
// })

module.exports = router