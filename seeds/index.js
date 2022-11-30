const sequelize = require('../config/connection');
const { Services, User } = require('../models');
const servicesData = require('./servicesData.json');
const seedUsers = require('./userSeed.json');

const seedAll = async () => {
	await sequelize.sync({ force: true });
	await Services.bulkCreate(servicesData);
	await User.bulkCreate(seedUsers);

	process.exit(0);
};

seedAll();