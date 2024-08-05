const { Router } = require("express");
const userController = require("../../controllers/UserController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const { yupValidate } = require("../../middlewares/yup/yup.middleware");
const { userYupSchema } = require("../../middlewares/yup/user");
const {
  userTypeCheck,
} = require("../../middlewares/permissions/userType.check");
const userRoutes = new Router();

userRoutes.post("/login", userController.login);
userRoutes.get("/", authVerify, userController.index);
userRoutes.get("/:id", authVerify, userTypeCheck, userController.show);
userRoutes.delete("/:id", authVerify, userTypeCheck, userController.destroy);
userRoutes.post("/", yupValidate(userYupSchema), userController.store);
userRoutes.put(
  "/:id",
  authVerify,
  userTypeCheck,
  yupValidate(userYupSchema),
  userController.update
);

module.exports = userRoutes;
