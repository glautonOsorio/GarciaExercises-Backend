require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./database");
const routes = require("./routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const PORT_API = process.env.APP_PORT || 3000;

class Server {
  constructor(app = express()) {
    this.app = app;
    this.middlewares();
    this.database();
    this.routes();
    this.initializeServer();
    this.swagger();
  }
  middlewares() {
    this.app.use(cors({ allowedHeaders: "Content-Type,Authorization" }));
    this.app.use(express.json());
  }

  async database() {
    try {
      await connection.authenticate();
      console.log("Database Connected");
    } catch (error) {
      console.error("Database connection failed: ", error);
      throw error;
    }
  }

  routes() {
    this.app.use(routes);
  }
  swagger() {
    this.app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }

  initializeServer() {
    this.app.listen(PORT_API, () => {
      console.log(`Server running on port ${PORT_API}`);
    });
  }
}

module.exports = new Server();
