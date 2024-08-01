const User = require("../../../database/models/users.model");

module.exports.deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do usuário deve ser um número inteiro");
      err.code = 400;
      throw err;
    }
    if (id != res.loggedUser.id && res.loggedUser.userType.name != "admin") {
      const err = new Error("Você não tem permissão de deletar esse usuário");
      err.code = 403;
      throw err;
    }

    const user = await User.destroy({
      where: {
        id: id,
      },
    });

    if (user == 0) {
      return res
        .status(400)
        .send({ message: `Nenhum usuário localizado pelo id: ${id}` });
    } else {
      return res
        .status(200)
        .send({ message: "Usuário foi deletado com sucesso." });
    }
  } catch (error) {
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
