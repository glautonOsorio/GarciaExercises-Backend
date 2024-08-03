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
        tableName: "sportTypes",
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.LocalSports, {
      as: "localSports",
      foreignKey: "sportTypeId",
    });
  }
}

module.exports = SportType;
