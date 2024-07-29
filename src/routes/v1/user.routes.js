const { Router } = require("express");
const userController = require("../../controllers/UserController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const userRoutes = new Router();

userRoutes.post("/login", userController.login);
userRoutes.post("/", userController.store);
userRoutes.get("/", authVerify, userController.index);
userRoutes.get("/:id", authVerify, userController.show);
userRoutes.put("/:id", authVerify, userController.update);
userRoutes.delete("/:id", authVerify, userController.destroy);

module.exports = userRoutes;
