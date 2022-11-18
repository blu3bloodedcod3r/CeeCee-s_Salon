const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model{};

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
 
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'services',
      }
)


module.exports = Services