"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("local-sports", {
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
      checkboxId: {
        type: Sequelize.INTEGER,
        references: {
          model: "checkbox",
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
    await queryInterface.dropTable("local-sports");
  },
};
