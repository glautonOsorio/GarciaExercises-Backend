const { Router } = require("express");
const userRoutes = require("./v1/user.routes");
const localRoutes = require("./v1/local.routes");
const adminRoutes = require("./v1/admin.routes");

const routes = new Router();

routes.use("/usuario", userRoutes);
routes.use("/local", localRoutes);
routes.use("/admin", adminRoutes);

module.exports = routes;
