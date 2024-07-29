const jwt = require("jsonwebtoken");
const User = require("../../database/models/users.model");
const Address = require("../../database/models/address.model");
const UserType = require("../../database/models/usersTypes.model");

const {
  env: { JWT_SECRET },
} = process;

module.exports.authVerify = async (req, res, next) => {
  try {
    const tokenHeader = req.headers["authorization"];
    const token = tokenHeader && tokenHeader.split(" ")[1];
    if (!token) {
      const err = new Error("não autorizado!");
      err.code = 401;
      throw err;
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    res.loggedUser = await User.findOne({
      where: { email: decoded.email },
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
    next();
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};
