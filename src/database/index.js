const Sequelize = require("sequelize");
const configDB = require("./config/database");

const User = require("./models/users.model");
const Permission = require("./models/permissions.model");
const TypesPermission = require("./models/typesPermission.model");
const UsersTypes = require("./models/usersTypes.model");
const Address = require("./models/address.model");
const Local = require("./models/local.model");
const SportType = require("./models/sportType.model");
const LocalSports = require("./models/localSports.model");

const models = {
  User,
  Permission,
  TypesPermission,
  UsersTypes,
  Address,
  Local,
  SportType,
  LocalSports,
};

const connection = new Sequelize(configDB);

Object.values(models).forEach((model) => {
  if (model.init) model.init(connection);
});

Object.values(models).forEach((model) => {
  if (model.associate) model.associate(models);
});

module.exports = connection;
