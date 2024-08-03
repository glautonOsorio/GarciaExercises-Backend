const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");
const UserType = require("../../../database/models/usersTypes.model");

module.exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Address,
          as: "address",
        },
        {
          model: UserType,
          as: "userType",
        },
      ],
    });

    return res.status(200).send(users);
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
