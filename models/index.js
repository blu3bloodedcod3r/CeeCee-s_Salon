const User = require('./User');
const Services = require('./Services');
const Appt = require('./Appt')


User.belongsToMany(Services, {
  through: {
    model: Appt,
    unique: false
  }
});

Services.belongsToMany(User, {
  through: {
    model: Appt,
    unique: false
  }
});

Services.belongsToMany(Appt, {
  through: {
    model: Appt, 
    unique: false
  }
})

// Appt.belongsToMany(Services, {
//   through: {
//     model: Services,
//     unique: false
//   }
// })

module.exports =  { User, Services, Appt };
