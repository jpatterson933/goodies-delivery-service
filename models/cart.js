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
    products_id:{
        type: DataTypes.INTEGER,
        references: {
            model: 'products',
            key: 'id',
        },
    },
    users_id:{
        type: DataTypes.STRING,
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



// userid
// productid

