
const sequelize = require('../config/connection');
const Services = require('../models/Services')
const servicesData = require('./servicesData.json')
// const seedUsers = require('./userSeed')
// const seedServices = require('./servicesSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Services.bulkCreate(servicesData)

  // await seedServices();

  process.exit(0);
};

seedAll();