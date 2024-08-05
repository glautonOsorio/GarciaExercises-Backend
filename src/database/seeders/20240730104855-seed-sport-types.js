"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sportTypes", [
      { name: "Musculação", createdAt: new Date(), updatedAt: new Date() },
      { name: "Basquete", createdAt: new Date(), updatedAt: new Date() },
      { name: "Corrida", createdAt: new Date(), updatedAt: new Date() },
      { name: "Futebol", createdAt: new Date(), updatedAt: new Date() },
      { name: "Tênis", createdAt: new Date(), updatedAt: new Date() },
      { name: "Yoga", createdAt: new Date(), updatedAt: new Date() },
      { name: "Natação", createdAt: new Date(), updatedAt: new Date() },
      { name: "Vôlei", createdAt: new Date(), updatedAt: new Date() },
      { name: "Outros", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sportTypes", null, {});
  },
};
