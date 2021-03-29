const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Address extends Model {}

Address.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        zip: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        user_id: {
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
        modelName: 'address',
    }
);

module.exports = Address
