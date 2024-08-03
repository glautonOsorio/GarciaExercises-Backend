const axios = require("axios");

const linkMapApi = "https://nominatim.openstreetmap.org/search";

async function getGoogleMapsLink(lat, lon) {
  try {
    const googleMapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
    return googleMapsLink;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao gerar o link do Google Maps");
  }
}

module.exports.getMapLocal = async (cep) => {
  try {
    const response = await axios.get(linkMapApi, {
      params: {
        q: `${cep}, Brazil`,
        format: "json",
        limit: 1,
      },
    });

    if (!response.data || response.data.length === 0) {
      throw new Error("CEP não encontrado");
    }

    const { lat, lon } = response.data[0];

    const mapLink = await getGoogleMapsLink(lat, lon);

    return mapLink;
  } catch (error) {
    console.error(error);
    return { erro: "CEP não encontrado" };
  }
};
