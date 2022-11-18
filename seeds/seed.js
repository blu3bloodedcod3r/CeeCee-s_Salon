const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedServices();
  console.log('\n----- SERVICES SEEDED -----\n');


  process.exit(0);
};

seedAll();
