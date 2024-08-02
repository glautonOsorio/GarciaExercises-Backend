const Local = require("../../../database/models/local.model");
const SportType = require("../../../database/models/sportType.model");
const LocalSport = require("../../../database/models/localSports.model");

module.exports.updateLocal = async (req, res) => {
  try {
    const {
      params: { id },
      body: {
        name,
        description,
        zipCode,
        city,
        state,
        street,
        number,
        complement,
        latitude,
        longitude,
        userId,
        type,
        sportTypes,
      },
    } = req;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do local deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const local = await Local.findByPk(id);

    if (!local) {
      return res.status(404).send({ message: "Local não encontrado." });
    }

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

    await local.update({
      name,
      description,
      zipCode,
      city,
      state,
      street,
      number,
      complement,
      latitude,
      longitude,
      userId,
      type,
    });

    const sportTypeNames = sportTypes.map((st) => st.name);

    const existingSportTypes = await SportType.findAll({
      where: {
        name: sportTypeNames,
      },
    });

    await LocalSport.destroy({ where: { localId: local.id } });

    const localSports = existingSportTypes.map((sportType) => ({
      localId: local.id,
      sportTypeId: sportType.id,
    }));

    await LocalSport.bulkCreate(localSports);

    res.status(200).json(local);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
