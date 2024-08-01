// models/SportType.model.js
const { Model, DataTypes } = require("sequelize");

class SportType extends Model {
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
        modelName: "SportType",
        tableName: "sport-types",
        timestamps: true,
      }
    );
  }
}

module.exports = SportType;
