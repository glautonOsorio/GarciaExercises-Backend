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
        // Admin Permissions
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.create_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.read_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.update_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.delete_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.create_admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.read_admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.update_admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.delete_admin,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.create_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.read_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.read_local_map,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.update_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.admin,
          permissionId: permissionIds.delete_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Basic and Premium Permissions
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.create_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.read_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.update_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.delete_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.create_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.read_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.read_local_map,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.update_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.basico,
          permissionId: permissionIds.delete_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.create_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.read_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.update_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.delete_user,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.create_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.read_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.read_local_map,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.update_local,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          typeId: userTypeIds.premium,
          permissionId: permissionIds.delete_local,
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
