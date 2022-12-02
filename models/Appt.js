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
    description: {
      type: DataTypes.STRING,
      reference: {
        modle: 'services',
        key: 'description'
      }
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
        model: 'services',
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
