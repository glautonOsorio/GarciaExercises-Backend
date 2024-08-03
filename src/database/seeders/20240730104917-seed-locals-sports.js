"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const [locals] = await queryInterface.sequelize.query(
        `SELECT id, name FROM "local";`
      );

      const [sportTypes] = await queryInterface.sequelize.query(
        `SELECT id, name FROM "sportTypes";`
      );

      const localIds = locals.reduce((acc, local) => {
        acc[local.name] = local.id;
        return acc;
      }, {});

      const sportTypeIds = sportTypes.reduce((acc, sportType) => {
        acc[sportType.name] = sportType.id;
        return acc;
      }, {});

      const localSports = [
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Musculação"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Basquete"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Corrida"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Futebol"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Tênis"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Yoga"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Natação"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Vôlei"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Outros"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Musculação"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Tênis"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Basquete"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Corrida"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Yoga"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 1"],
          sportTypeId: sportTypeIds["Natação"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localId: localIds["Local 2"],
          sportTypeId: sportTypeIds["Vôlei"],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      await queryInterface.bulkInsert("localSports", localSports, {});
    } catch (error) {
      console.error("Error in seeder:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("localSports", null, {});
  },
};
