const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'users',
      }
);

module.exports = User;