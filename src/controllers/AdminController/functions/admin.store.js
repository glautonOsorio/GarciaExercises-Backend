const connection = require("../../../database");

const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");
const UserType = require("../../../database/models/usersTypes.model");

module.exports.createNewAdmin = async (req, res) => {
  const {
    body: {
      name,
      gender,
      cpf,
      email,
      birthDate,
      password,
      userType,
      address: {
        zipCode,
        city,
        state,
        street,
        number,
        complement,
        neighborhood,
        referencePoint,
      },
    },
  } = req;

  let transaction;

  try {
    const userTypeRecord = await UserType.findOne({
      where: { name: userType },
    });
    if (!userTypeRecord) {
      return res.status(400).send({ message: "Tipo de usuário inválido" });
    }

    transaction = await connection.transaction();
    try {
      const { id: addressId } = await Address.create(
        {
          zipCode,
          city,
          state,
          street,
          number,
          complement,
          neighborhood,
          referencePoint,
        },
        { transaction }
      );

      const userObject = {
        name,
        gender,
        cpf,
        email,
        birthDate,
        password,
        userTypeId: userTypeRecord.id,
        addressId,
      };

      await User.create(userObject, { transaction });
      await transaction.commit();

      return res.status(201).send({ message: "Usuário criado com sucesso" });
    } catch (error) {
      if (transaction) await transaction.rollback();
      throw error;
    }
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: "Email ou CPF já cadastrado" });
    }
    return res.status(error.code || 500).send({ message: error.message });
  }
};
