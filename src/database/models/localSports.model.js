const { Model, DataTypes } = require("sequelize");

class LocalSports extends Model {
  static init(sequelize) {
    super.init(
      {
        localId: {
          type: DataTypes.INTEGER,
          references: {
            model: "locals",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        sportTypeId: {
          type: DataTypes.INTEGER,
          references: {
            model: "sportTypes",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        sequelize,
        modelName: "LocalSports",
        tableName: "localSports",
        timestamps: true,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Local, { as: "local", foreignKey: "localId" });
    this.belongsTo(models.SportType, {
      as: "sportType",
      foreignKey: "sportTypeId",
    });
  }
}

module.exports = LocalSports;
