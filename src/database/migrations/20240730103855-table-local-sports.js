"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("localSports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      localId: {
        type: Sequelize.INTEGER,
        references: {
          model: "local",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sportTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "sportTypes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("localSports");
  },
};
