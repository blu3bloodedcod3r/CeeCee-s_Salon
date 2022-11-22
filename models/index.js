const User = require('./User');
const Service = require('./Service');
const Appt = require('./Appt')

User.belongsToMany(Service, {
  through: {
    model: Appt,
    unique: false,
  },
});

Service.belongsToMany(User, {
  through: {
    model: Appt,
    unique: false
  },
});


module.exports =  { User, Appt };