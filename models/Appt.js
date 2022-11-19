const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Appt extends Model {}

Appt.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'user',
        key: 'id'
      },
    },
    service_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'service',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'appt',
  }
)

module.exports = Appt
