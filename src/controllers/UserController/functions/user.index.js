const User = require("../../../database/models/users.model");
const Address = require("../../../database/models/address.model");
const UserType = require("../../../database/models/usersTypes.model");

module.exports.findAllUsers = async (req, res) => {
  try {
    let users;
    if (res.loggedUser.userType.name != "admin") {
      users = await User.findAll({
        attributes: { exclude: ["password", "cpf", "id"] },
        include: [
          {
            model: UserType,
            as: "userType",
          },
        ],
      });
    } else {
      users = await User.findAll({
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
    }
    return res.status(200).send({ data: users });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
