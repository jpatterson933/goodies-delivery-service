const Users = require('./users')
const Products = require('./products')
const Cart = require('./cart')
const Address = require('./address')

//this says that any single product can belong to any number of popel
Products.belongsToMany(Users, {
    through:{
        model: Cart,
        unique:false
    },
    as: 'users_cart',
    foreignKey:'products_id'
});

//this is says that any single user can have an associate with any number of products
Users.belongsToMany(Products, {
    through:{
        model: Cart,
        unique:false
    },
    as: 'products',
    foreignKey:'users_id'
})

Address.belongsTo(Users, {
    foreignKey: 'user_id'
})

Users.hasOne(Address, {
    foreignKey: 'user_id'
});


module.exports = { 
    Users, 
    Products, 
    Cart,
    Address,
};