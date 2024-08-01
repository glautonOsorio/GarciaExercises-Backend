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
        acc[type.id] = type.name.toLowerCase();
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

      // Função para pegar o primeiro usuário disponível de um tipo específico
      const getUserIdForType = (type) => {
        if (userIds[type] && userIds[type].length > 0) {
          return userIds[type].shift(); // Remove e retorna o primeiro usuário disponível
        }
        return null; // Retorna null se não houver usuários do tipo especificado
      };

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
          userId: getUserIdForType("admin"),
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
          userId: getUserIdForType("premium"),
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
          userId: getUserIdForType("basico"),
          type: "basico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      const validLocals = locals.filter((local) => local.userId !== null);

      await queryInterface.bulkInsert("local", validLocals, {});
    } catch (error) {
      console.error("Error in seeder:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("local", null, {});
  },
};
