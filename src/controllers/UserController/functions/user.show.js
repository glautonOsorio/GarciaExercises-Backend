const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");
const UserType = require("../../../database/models/usersTypes.model");

module.exports.findOneUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const user = await User.findByPk(id, {
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      include: [
        {
          model: Address,
          as: "address",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: UserType,
          as: "userType",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });
    if (!user) {
      const err = new Error("Usuário não encontrado");
      return res.status(400).send({ message: err.message });
    }
    return res.status(200).send({ data: user });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
