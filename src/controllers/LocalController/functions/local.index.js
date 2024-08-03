const Local = require("../../../database/models/local.model");
const User = require("../../../database/models/users.model");
const LocalSports = require("../../../database/models/localSports.model");
const SportType = require("../../../database/models/sportType.model");

module.exports.findAllLocal = async (req, res) => {
  try {
    const { cep, type } = req.query;

    let condition = {};

    if (cep) {
      condition.zipCode = cep;
    }
    if (type) {
      condition.type = type;
    }

    if (res.loggedUser.userType.name === "basico") {
      condition.type = "basico";
    }

    const local = await Local.findAll({
      where: condition,
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["password", "cpf", "id", "createdAt", "updatedAt"],
          },
        },
        {
          model: LocalSports,
          as: "localSports",
          attributes: { exclude: ["createdAt", "updatedAt"] },

          include: [
            {
              model: SportType,
              as: "sportType",
              attributes: { exclude: ["createdAt", "updatedAt"] },
            },
          ],
        },
      ],
    });
    if (local) {
      res.status(200).json(local);
    } else {
      res.status(404).json({ message: "Locais não encontrado." });
    }
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar locais.", error });
  }
};
