
const sequelize = require('../config/connection');
const Services = require('../models/Services')
const servicesData = require('./servicesData.json');
const User = require('../models/User');
const seedUsers = require('./userSeed.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Services.bulkCreate(servicesData)
  await User.bulkCreate(seedUsers)

  process.exit(0);
};

seedAll();