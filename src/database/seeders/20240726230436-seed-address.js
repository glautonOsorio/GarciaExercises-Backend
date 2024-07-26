"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "addresses",
      [
        {
          zipCode: "12345-678",
          city: "São Paulo",
          state: "SP",
          street: "Rua das Flores",
          number: 123,
          complement: "Apto 101",
          neighborhood: "Centro",
          referencePoint: "Próximo ao shopping",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          zipCode: "98765-432",
          city: "Rio de Janeiro",
          state: "RJ",
          street: "Avenida Brasil",
          number: 456,
          complement: "Casa",
          neighborhood: "Zona Sul",
          referencePoint: "Em frente à praia",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("addresses", null, {});
  },
};
