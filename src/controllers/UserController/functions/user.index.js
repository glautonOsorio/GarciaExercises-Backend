const User = require("../../../database/models/users.model");

module.exports.findAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    return res.status(200).send({ data: users });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ err: err.message });
  }
};
