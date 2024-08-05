const User = require("../../../database/models/users.model");

module.exports.deleteUser = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;

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
