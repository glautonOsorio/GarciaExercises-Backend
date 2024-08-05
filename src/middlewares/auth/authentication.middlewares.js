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
      const err = new Error("Não autorizado!");
      err.code = 401;
      throw err;
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    const loggedUser = await User.findOne({
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
    if (!loggedUser) {
      const err = new Error("Usuário não encontrado!");
      err.code = 404;
      throw err;
    }
    res.loggedUser = loggedUser;
    next();
  } catch (err) {
    return res.status(err.code || 400).json({ message: err.message });
  }
};
