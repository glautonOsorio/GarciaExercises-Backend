const { Router } = require("express");
const userController = require("../../controllers/UserController");
const userRoutes = new Router();

userRoutes.get("/", userController.index);
userRoutes.post("/", userController.store);
userRoutes.get("/:id", userController.show);
userRoutes.put("/:id", userController.update);
userRoutes.post("/login", userController.login);
userRoutes.delete("/:id", userController.destroy);

module.exports = userRoutes;
