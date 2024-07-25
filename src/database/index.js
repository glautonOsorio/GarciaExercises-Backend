const Sequelize = require("sequelize");
const configDB = require("./config/database");

const models = {};

const connection = new Sequelize(configDB);
/*
Object.values(models).forEach((model) => {
  model.init(connection);
});

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});*/

module.exports = connection;
