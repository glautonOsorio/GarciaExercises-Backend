const connection = require("../../../database");

const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");

module.exports.createNewUser = async (req, res) => {
  try {
    const {
      body: {
        name,
        gender,
        cpf,
        email,
        birthDate,
        password,
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
        addressId,
      };

      await User.create(userObject, {
        transaction,
      });
      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();
      let err = new Error();
      err = error;
      throw err;
    }

    return res.status(201).send({ message: "Usuário criado com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
