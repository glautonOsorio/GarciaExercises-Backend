"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const [users] = await queryInterface.sequelize.query(
        `SELECT id, "userTypeId" FROM "users";`
      );

      const [userTypes] = await queryInterface.sequelize.query(
        `SELECT id, name FROM "usersTypes";`
      );

      const userTypeMap = userTypes.reduce((acc, type) => {
        acc[type.id] = type.name;
        return acc;
      }, {});

      const userIds = users.reduce((acc, user) => {
        const userType = userTypeMap[user.userTypeId];
        if (userType) {
          acc[userType] = acc[userType] || [];
          acc[userType].push(user.id);
        }
        return acc;
      }, {});

      const locals = [
        {
          name: "Local 1",
          description: "Descrição do Local 1",
          zipCode: "12345-678",
          city: "Cidade 1",
          state: "Estado 1",
          neighborhood: "Bairro 1",
          street: "Rua 1",
          number: "123",
          complement: "Apto 1",
          latitude: -23.55052,
          longitude: -46.633308,
          userId: userIds.admin ? userIds.admin[0] : null,
          type: "premium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Local 2",
          description: "Descrição do Local 2",
          zipCode: "12345-678",
          city: "Cidade 2",
          state: "Estado 2",
          neighborhood: "Bairro 2",
          street: "Rua 2",
          number: "456",
          complement: "Apto 2",
          latitude: -23.55052,
          longitude: -46.633308,
          userId: userIds.premium ? userIds.premium[0] : null,
          type: "premium",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Local 3",
          description: "Descrição do Local 3",
          zipCode: "12345-678",
          city: "Cidade 3",
          state: "Estado 3",
          neighborhood: "Bairro 3",
          street: "Rua 3",
          number: "789",
          complement: "Apto 3",
          latitude: -23.55052,
          longitude: -46.633308,
          userId: userIds.basico ? userIds.basico[0] : null,
          type: "basico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      await queryInterface.bulkInsert("local", locals, {});
    } catch (error) {
      console.error("Error in seeder:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("local", null, {});
  },
};
