const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init(
    {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    //this is our foreign key that will attach to the products id in the product model
    products_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id',
        },
    },
    //this is the foreign key that will attach to the users id in the users model
    users_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id',
        },
    }, 
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
  }
);

module.exports = Cart