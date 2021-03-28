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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birth: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //is there a way to make this current day minus 21 years?
                isBefore: "2020-03-26"
            },
        },
        phoneNum: {
            type: DataTypes.BIGINT,
            allowNull: false,
            validate: {
                isNumeric: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passowrd: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10],
            },
        },
    },
    //need two objects
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password);
                return newUserData;
            },
            beforeUpdate: async(updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password);
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
    },
);

module.exports = Users