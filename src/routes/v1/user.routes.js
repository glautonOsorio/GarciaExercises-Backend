const { Router } = require("express");
const userController = require("../../controllers/UserController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const { yupValidate } = require("../../middlewares/yup/yup.middleware");
const { userYupSchema } = require("../../middlewares/yup/user");
const userRoutes = new Router();

userRoutes.post("/login", userController.login);
userRoutes.get("/", authVerify, userController.index);
userRoutes.get("/:id", authVerify, userController.show);
userRoutes.delete("/:id", authVerify, userController.destroy);
userRoutes.post("/", yupValidate(userYupSchema), userController.store);
userRoutes.put(
  "/:id",
  authVerify,
  yupValidate(userYupSchema),
  userController.update
);

module.exports = userRoutes;
