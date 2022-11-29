const { User } = require('../models');

const userData = [
  {
    email: 'hparker@msn.com',
    password: '1234'
  },
  {
    email: 'santaC@gmail.com',
    password: '1234'
  },
  {
    email: 'tom@yahoo.com',
    password: '1234'
  },
]

const seedUsers = async () => {
    const users = await User.bulkCreate(userData, {
    individualHooks: true,
    return: true,
  });
  } 
  
  module.exports = seedUsers;  