const Local = require("../../../database/models/local.model");

const deleteLocal = async (req, res) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do local deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const local = await Local.findByPk(id);
    if (!local) {
      const err = new Error("Local não encontrado.");
      err.code = 404;
      throw err;
    }

    if (
      local.userId != res.loggedUser.id &&
      res.loggedUser.userType.name != "admin"
    ) {
      const err = new Error("Você não tem permissão para deletar esse local");
      err.code = 403;
      throw err;
    }

    await Local.destroy({ where: { id } });
    res.status(200).json({ message: "Local deletado com sucesso." });
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "Erro ao deletar local.", error });
  }
};

module.exports = deleteLocal;
