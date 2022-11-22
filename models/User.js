const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING
        },
        // password: {
        //     type: DataTypes.ALPHANUMERIC
        // },
        status: {
            type: String, 
            enum: ['Pending', 'Active'],
            default: 'Pending'
          },
          confirmationCode: { 
            type: String, 
            unique: true },
          // roles: [
          //   {
          //     type: mongoose.Schema.Types.ObjectId,
          //     ref: "Role"
          //   }
          // ]
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);


module.exports = User