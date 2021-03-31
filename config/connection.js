//Here we require sequelize
const Sequelize = require('sequelize');
let sequelize;
//we require dotenv so we can store our name, user and password in a separate file
require('dotenv').config();
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.JAWSDB_URL
  )
} else {
  sequelize = new Sequelize(
    //name of the database
    process.env.DB_NAME,
    //name of the user
    process.env.DB_USER,
    //your password
    process.env.DB_PASSWORD,
    {
      //host for mysequal
      host: 'localhost',
      //the dialect configuration lets us know which database we are using
      dialect: 'mysql',
      //this is the port we are on in mysql
      port: 3306,
    }
  );
}

//once sequelize has been established, we want to export it
module.exports = sequelize;
