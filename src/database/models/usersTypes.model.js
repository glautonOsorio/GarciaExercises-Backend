const { Model, DataTypes } = require("sequelize");

class UsersTypes extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: "userTypeId",
      as: "users",
    });
    this.belongsToMany(models.Permission, {
      through: models.TypesPermission,
      foreignKey: "typeId",
      as: "permissions",
    });
  }

  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "UsersTypes",
        tableName: "usersTypes",
      }
    );
  }
}

module.exports = UsersTypes;
