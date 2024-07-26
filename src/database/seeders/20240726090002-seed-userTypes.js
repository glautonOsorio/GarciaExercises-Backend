"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("usersTypes", [
      {
        name: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "básico",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "premium",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("usersTypes", null, {});
  },
};
