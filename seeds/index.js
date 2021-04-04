const sequelize = require('../config/connection');
const { Cart } = require('../models');
const Products = require('../models/products');
const productData = require('./products.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Products.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });
  process.exit(0);
};
seedDatabase();