const { Model, DataTypes } = require("sequelize");

class Permission extends Model {
  static associate(models) {
    this.belongsToMany(models.UsersTypes, {
      through: models.TypesPermission,
      foreignKey: "permissionId",
      as: "userTypes",
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
        modelName: "Permission",
        tableName: "permissions",
      }
    );
  }
}

module.exports = Permission;
