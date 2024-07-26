"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permissions", [
      {
        name: "create_record",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "read_record",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "update_record",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "delete_record",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "create_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "read_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "update_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "delete_test",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
  },
};
