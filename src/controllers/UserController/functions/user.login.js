const jwt = require("jsonwebtoken");

const User = require("../../../database/models/users.model");

const passwordEncryption = require("../../../utils/passwordEncryption");

const {
  env: { JWT_SECRET },
} = process;

module.exports.userLogin = async (req, res) => {
  try {
    const {
      body: { email, password },
    } = req;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      const err = new Error("Email / Senha inválido(s)");
      err.code = 401;
      throw err;
    }

    const validatePassword = passwordEncryption.compare(
      password,
      user.password
    );

    if (!validatePassword) {
      const err = new Error("Email / Senha inválido(s)");
      err.code = 401;
      throw err;
    }

    const access_token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    return res.status(200).send({
      message: "Usuário logado com sucesso",
      access_token,
    });
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
