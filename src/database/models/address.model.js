const { Model, DataTypes } = require("sequelize");

class Address extends Model {
  static associate(models) {
    this.hasMany(models.User, {
      foreignKey: "addressId",
      as: "users",
    });
  }

  static init(sequelize) {
    super.init(
      {
        zipCode: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        street: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        number: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        complement: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        neighborhood: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        referencePoint: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "Address",
        tableName: "addresses",
      }
    );
  }
}

module.exports = Address;
