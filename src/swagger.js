require("dotenv").config();
const swaggerAutogen = require("swagger-autogen")();

const {
  env: { APP_PORT },
} = process;

const doc = {
  info: {
    title: "Oficina-Garcia-Azevedo",
    description: "Api criada pelos 3 Mosqueteiros",
  },
  host: `localhost:${APP_PORT}`,
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

const outputFile = "./src/swagger.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
