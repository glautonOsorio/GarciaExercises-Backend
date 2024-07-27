const connection = require("../../../database");

const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");

module.exports.updateUser = async (req, res) => {
  try {
    const {
      params: { id },
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

    const transaction = await connection.transaction();
    try {
      const user = await User.findByPk(id);
      const { addressId } = user;

      await User.update(
        {
          name,
          gender,
          cpf,
          email,
          birthDate,
          password,
        },
        { where: { id }, transaction }
      );

      await Address.update(
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
        { where: { id: addressId }, transaction }
      );

      await transaction.commit();
    } catch (error) {
      if (transaction) await transaction.rollback();
      let err = new Error();
      err = error;
      throw err;
    }

    return res.status(200).send({ message: "Usuário atualizado com sucesso" });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(409)
        .send({ message: error.message, errors: error.errors });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
