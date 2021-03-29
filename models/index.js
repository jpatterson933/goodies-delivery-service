const Users = require('./users')
const Products = require('./products')
const Cart = require('./cart')
const Address = require('./address')

Products.belongsToMany(Users, {
    foreignKey:'products_id',
    through:{
        model: Cart,
        unique:false
    },
    as: 'users'
});

Users.belongsToMany(Products, {
    foreignKey:'user_id',
    through:{
        model: Cart,
        unique:false
    },
    as: 'products'
})



// Products.belongsToMany(Users, {
//     //?????????????? halp
// });


module.exports = { 
    Users, 
    Products, 
    Cart,
    Address,
};