const { Model, DataTypes } = require("sequelize");
const passwordEncryption = require("../../utils/passwordEncryption");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        gender: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        cpf: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        birthDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        userTypeId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        addressId: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        hooks: {
          beforeSave: async (user) => {
            if (user.password) {
              user.password = await passwordEncryption.encrypt(user.password);
            }
          },
        },
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.UsersTypes, {
      foreignKey: "userTypeId",
      as: "userType",
    });
    this.belongsTo(models.Address, {
      foreignKey: "addressId",
      as: "address",
    });
    this.hasMany(models.Local, { as: "locals", foreignKey: "userId" });
  }
}

module.exports = User;
