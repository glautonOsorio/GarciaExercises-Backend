const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");
const UserType = require("../../../database/models/usersTypes.model");

module.exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password", "cpf", "id", "createdAt", "updatedAt"],
      },
      include: [
        {
          model: Address,
          as: "address",
          attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
          },
        },
        {
          model: UserType,
          as: "userType",
          attributes: {
            exclude: ["id", "createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "Nenhum usuário encontrado" });
    }

    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Erro ao buscar usuários", error: err.message });
  }
};
