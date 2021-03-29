const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Users extends Model {

//we need a check password
/* checkPassword(loginPw) {
    return bcrypt.comparSync(loginPw, this.password);
}*/
}

Users.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                //is there a way to make this current day minus 21 years?
                isBefore: "09/11/2003"
            },
        },
        cell: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
    },
    //need two objects
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    }
)

module.exports = Users