const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/users.model");
const Permission = require("./models/permissions.model");
const TypesPermission = require("./models/typesPermission.model");
const UsersTypes = require("./models/usersTypes.model");
const Address = require("./models/address.model");

const models = { User, Permission, TypesPermission, UsersTypes, Address };

const connection = new Sequelize(configDB);

Object.values(models).forEach((model) => {
  if (model.init) model.init(connection);
});

Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

module.exports = connection;
