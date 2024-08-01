const Local = require("../../../database/models/local.model");
const User = require("../../../database/models/users.model");
const LocalSport = require("../../../database/models/localSports.model");
const SportType = require("../../../database/models/sportType.model");

const findOneLocal = async (req, res) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do local deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const local = await Local.findByPk(id, {
      include: [
        {
          model: User,
          as: "user",
          attributes: { exclude: ["password", "cpf", "id"] },
        },
        {
          model: LocalSport,
          as: "localSports",
          include: [
            {
              model: SportType,
              as: "sportType",
            },
          ],
        },
      ],
    });

    if (
      local.userId !== res.loggedUser.id &&
      res.loggedUser.userType.name !== "admin"
    ) {
      const err = new Error(
        "Você não tem permissão para ver as informações desse local"
      );
      err.code = 403;
      throw err;
    }

    if (local) {
      res.status(200).json(local);
    } else {
      res.status(404).json({ message: "Local não encontrado." });
    }
  } catch (error) {
    res
      .status(error.code || 500)
      .json({ message: error.message || "Erro ao buscar local.", error });
  }
};

module.exports = findOneLocal;
