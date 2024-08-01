const Local = require("../../../database/models/local.model");
const User = require("../../../database/models/users.model");
const LocalSport = require("../../../database/models/localSports.model");
const SportType = require("../../../database/models/sportType.model");

const findAllLocal = async (req, res) => {
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

    res.status(200).json(local);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar locais.", error });
  }
};

module.exports = findAllLocal;
