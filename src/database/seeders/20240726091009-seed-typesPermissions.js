"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const [usersTypes] = await queryInterface.sequelize.query(
        `SELECT id, name FROM "usersTypes";`
      );

      const [permissions] = await queryInterface.sequelize.query(
        `SELECT id, name FROM "permissions";`
      );

      const userTypeIds = usersTypes.reduce((acc, type) => {
        acc[type.name] = type.id;
        return acc;
      }, {});

      const permissionIds = permissions.reduce((acc, perm) => {
        acc[perm.name] = perm.id;
        return acc;
      }, {});

      const typesPermissions = [
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.create_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.read_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.update_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.delete_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.create_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.read_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.update_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.delete_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.read_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.read_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.read_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.update_record,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.read_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.update_test,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];

      await queryInterface.bulkInsert("typesPermissions", typesPermissions, {});
    } catch (error) {
      console.error("Error in seeder:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("typesPermissions", null, {});
  },
};
