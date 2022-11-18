const User = require('./User');
const Service = require('./Services');

User.hasMany(Appts, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Service.hasMany(User, {
  foreignKey: 'user_id'
});

module.exports =  {User, Project};