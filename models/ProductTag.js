const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    /* 
    many to many relationships need a through model with both foreign keys 
    to associate the two data tables
    */
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: "id",
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'tag',
        key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
