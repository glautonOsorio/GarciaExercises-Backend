// models/Local.model.js
const { Model, DataTypes } = require("sequelize");

class Local extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
        },
        zipCode: {
          type: DataTypes.STRING,
        },
        city: {
          type: DataTypes.STRING,
        },
        state: {
          type: DataTypes.STRING,
        },
        neighborhood: {
          type: DataTypes.STRING,
        },
        street: {
          type: DataTypes.STRING,
        },
        number: {
          type: DataTypes.STRING,
        },
        complement: {
          type: DataTypes.STRING,
        },
        latitude: {
          type: DataTypes.FLOAT,
        },
        longitude: {
          type: DataTypes.FLOAT,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "SET NULL",
        },
        type: {
          type: DataTypes.ENUM,
          values: ["premium", "basico"],
          allowNull: false,
          defaultValue: "basico",
        },
      },
      {
        sequelize,
        modelName: "Local",
        tableName: "local",
        timestamps: true,
      }
    );
  }
}

module.exports = Local;
