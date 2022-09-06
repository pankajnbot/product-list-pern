var Sequelize = require("sequelize");
require("dotenv").config();

const user = process.env.DB_USERNAME;
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;

const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}/${database}`,
  {
    dialect: "postgres",
  }
);

module.exports = { sequelize, Sequelize };
