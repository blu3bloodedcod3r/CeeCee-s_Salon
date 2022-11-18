const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model{};

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.Array,
            options: {
                [
                    "Women's Haircut",
                    "Men's Haircut",
                    "Styling",
                    "Highltights & Tints",
                    "Beard Trimming"

                ]
            }
        },
        price: {
            type: DataTypes.INTEGER
        },
        duration: {
            type: DataTypes.INTEGER
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