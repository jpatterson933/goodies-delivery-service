const Users = require('./users')
const Products = require('./products')
const Cart = require('./cart')
const Address = require('./address')

//this says that any single product can belong to any number of popel
Products.belongsToMany(Users, {
    foreignKey:'products_id',
    through:{
        model: Cart,
        unique:false
    },
    as: 'users_cart'
});

//this is says that any single user can have an associate with any number of products
Users.belongsToMany(Products, {
    foreignKey:'user_id',
    through:{
        model: Cart,
        unique:false
    },
    as: 'products'
})


module.exports = { 
    Users, 
    Products, 
    Cart,
    Address,
};