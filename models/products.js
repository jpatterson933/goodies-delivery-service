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


// "name": "Snax Mint Milk Chocolate",
//       "image": "https://cdn.albertacannabis.org/-/media/images/cannabis/01001000/01001000_1.jpg?h=625&w=770&vr=20200606061837&hash=9F8385454F86CC39A5281EB9787EC5C89259510B",
//       "thc": "10 mg",
//       "cbd": "0 mg",
//       "price": 4.69,
//       "weight": "2.8g",
//       "brand": "TRAILBLAZER",
//       "producer": "Alberta Cannabis"

module.exports = Products