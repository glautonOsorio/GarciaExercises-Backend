const { Model, DataTypes } = require("sequelize");

class TypesPermission extends Model {
  static init(sequelize) {
    super.init(
      {
        typeId: {
          type: DataTypes.INTEGER,
          references: {
            model: "usersTypes",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        permissionId: {
          type: DataTypes.INTEGER,
          references: {
            model: "permissions",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        sequelize,
        modelName: "TypesPermission",
        tableName: "typesPermissions",
        timestamps: true,
      }
    );
  }
}

module.exports = TypesPermission;
