const { Router } = require("express");
const userRoutes = require("./v1/user.routes");
const localRoutes = require("./v1/local.routes");

const routes = new Router();

routes.use("/usuario", userRoutes);
routes.use("/local", localRoutes);

module.exports = routes;
