const axios = require("axios");
const linkMapApi =
  "https://nominatim.openstreetmap.org/search?format=json&country=Brazil&limit=1";

async function getGoogleMapsLink(lat, lon) {
  try {
    const googleMapsLink = `https://www.google.com/maps?q=${lat}, ${lon}`;

    return googleMapsLink;
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao gerar o link do Google Maps");
  }
}

module.exports.getMapLocal = async (cep) => {
  try {
    const response = await axios.get(`${linkMapApi}&postalcode=${cep}`);

    if (!response.data || response.data.length === 0) {
      throw new Error("CEP não encontrado");
    }

    const { lat, lon } = response.data[0];

    const mapLink = await getGoogleMapsLink(lat, lon);

    return { lat, lon, display_name, mapLink };
  } catch (error) {
    return { erro: "CEP não encontrado" };
  }
};
