const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model {}

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        thc: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        cbd: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            isDecimal: true,
        },
        weight: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        producer: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'products',
    }
)



module.exports = Products