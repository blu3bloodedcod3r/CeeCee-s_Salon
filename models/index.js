const User = require('./User');
const Services = require('./Services');
const Appt = require('./Appt')


User.belongsToMany(Services, {
  through: {
    model: Appt,
    foreignKey: 'user_id', 
    unique: false
  }
});

Services.belongsToMany(User, {
  through: {
    model: Appt,
    foreignKey: 'service_id',
    unique: false
  }
});

module.exports =  { User, Services, Appt };
