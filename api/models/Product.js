const { sequelize, Sequelize } = require("../configs/DBConfig");
const Product = sequelize.define(
  "Product",
  {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    name: Sequelize.TEXT,
    price: Sequelize.INTEGER,
  },
  { timestamps: false }
);

module.exports = { Product };
