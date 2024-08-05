"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permissions", [
      { name: "create_user", createdAt: new Date(), updatedAt: new Date() },
      { name: "read_user", createdAt: new Date(), updatedAt: new Date() },
      { name: "update_user", createdAt: new Date(), updatedAt: new Date() },
      { name: "delete_user", createdAt: new Date(), updatedAt: new Date() },
      { name: "create_admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "read_admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "update_admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "delete_admin", createdAt: new Date(), updatedAt: new Date() },
      { name: "create_local", createdAt: new Date(), updatedAt: new Date() },
      { name: "read_local", createdAt: new Date(), updatedAt: new Date() },
      { name: "read_local_map", createdAt: new Date(), updatedAt: new Date() },
      { name: "update_local", createdAt: new Date(), updatedAt: new Date() },
      { name: "delete_local", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permissions", null, {});
  },
};
