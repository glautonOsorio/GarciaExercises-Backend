"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const [userTypes] = await queryInterface.sequelize.query(
        `SELECT id, name FROM "usersTypes";`
      );
      const [addresses] = await queryInterface.sequelize.query(
        `SELECT id, "zipCode" FROM "addresses";`
      );

      const userTypeIds = userTypes.reduce((acc, type) => {
        acc[type.name.toLowerCase()] = type.id;
        return acc;
      }, {});

      const addressIds = addresses.reduce((acc, address) => {
        acc[address.zipCode] = address.id;
        return acc;
      }, {});

      const passwordEncryption = require("../../utils/passwordEncryption");

      const hashedPassword1 = await passwordEncryption.encrypt("password");
      const hashedPassword2 = await passwordEncryption.encrypt("password");
      const hashedPassword3 = await passwordEncryption.encrypt("password");

      await queryInterface.bulkInsert(
        "users",
        [
          {
            name: "Admin User",
            gender: "Homem",
            cpf: "123.456.789-00",
            email: "admin@example.com",
            password: hashedPassword1,
            birthDate: new Date("1980-01-01"),
            userTypeId: userTypeIds["admin"],
            addressId: addressIds["12345-678"],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Basic User",
            gender: "Mulher",
            cpf: "987.654.321-00",
            email: "basic@example.com",
            password: hashedPassword2,
            birthDate: new Date("1990-01-01"),
            userTypeId: userTypeIds["basico"],
            addressId: addressIds["98765-432"],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            name: "Premium User",
            gender: "Outro",
            cpf: "555.666.777-88",
            email: "premium@example.com",
            password: hashedPassword3,
            birthDate: new Date("1985-01-01"),
            userTypeId: userTypeIds["premium"],
            addressId: addressIds["12345-678"],
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      );
    } catch (error) {
      console.error("Error in seeder:", error);
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
