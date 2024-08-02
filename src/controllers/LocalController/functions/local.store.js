const Local = require("../../../database/models/local.model");
const SportType = require("../../../database/models/sportType.model");
const LocalSport = require("../../../database/models/localSports.model");

module.exports.createNewLocal = async (req, res) => {
  try {
    const {
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
    } = req.body;

    const sportTypeNames = sportTypes.map((st) => st.name);

    const existingSportTypes = await SportType.findAll({
      where: {
        name: sportTypeNames,
      },
    });

    const newLocal = await Local.create({
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

    const localSports = existingSportTypes.map((sportType) => ({
      localId: newLocal.id,
      sportTypeId: sportType.id,
    }));

    await LocalSport.bulkCreate(localSports);

    res.status(201).json(newLocal);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res.status(409).send({ message: error.message });
    }
    return res
      .status(error.code || error.status || 500)
      .send({ message: error.message });
  }
};
