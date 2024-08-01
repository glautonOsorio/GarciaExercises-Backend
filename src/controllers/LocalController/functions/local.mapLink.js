const Local = require("../../../database/models/local.model");
const { getMapLocal } = require("../../../utils/mapFinder");

module.exports.localMapLink = async (req, res) => {
  try {
    const { localId } = req.params;

    if (!Number.isInteger(Number.parseInt(localId))) {
      const err = new Error("O ID do local deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    const local = await Local.findByPk(localId);

    if (!local) {
      return res.status(404).send({ message: "Local não encontrado." });
    }

    const { zipCode } = local;
    const mapData = await getMapLocal(zipCode);

    if (mapData.erro) {
      return res.status(404).send({ message: mapData.erro });
    }

    res.status(200).json(mapData);
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
};
