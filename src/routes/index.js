const { Router } = require("express");

const userRoutes = require("./v1/user.routes");

const routes = new Router();

routes.use("/usuario", userRoutes);

module.exports = routes;
