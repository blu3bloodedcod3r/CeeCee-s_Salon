
const sequelize = require('../config/connection');
const seedUsers = require('./userSeed')
// const seedServices = require('./servicesSeed');

const seedAll= async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();

  // await seedServices();

  process.exit(0);
};

seedAll();