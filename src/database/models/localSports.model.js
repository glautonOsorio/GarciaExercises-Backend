// models/LocalSport.model.js
const { Model, DataTypes } = require("sequelize");

class LocalSport extends Model {
  static init(sequelize) {
    super.init(
      {
        localId: {
          type: DataTypes.INTEGER,
          references: {
            model: "local",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        sportTypeId: {
          type: DataTypes.INTEGER,
          references: {
            model: "sport-types",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        sequelize,
        modelName: "LocalSport",
        tableName: "local-sports",
        timestamps: true,
      }
    );
  }
}

module.exports = LocalSport;
