const Sequelize = require("sequelize");
const configDB = require("./config/database");
const Permission = require("./models/permissions.model");
const TypesPermission = require("./models/typesPermission.model");
const UsersTypes = require("./models/usersTypes.model");

const models = { TypesPermission, Permission, UsersTypes };

const connection = new Sequelize(configDB);

Object.values(models).forEach((model) => {
  model.init(connection);
});

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

module.exports = connection;
