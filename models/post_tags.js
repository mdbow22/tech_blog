const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PostTag extends Model {};

PostTag.init(
    {
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'posts',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'tags',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        underscored: true,
        freezeTableName: true,
        modelName: 'post_tags',
    }
);

module.exports = PostTag;