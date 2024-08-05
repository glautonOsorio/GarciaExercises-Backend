const { Router } = require("express");
const adminController = require("../../controllers/AdminController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const { adminCheck } = require("../../middlewares/permissions/admin.check");
const { adminYupSchema } = require("../../middlewares/yup/admin");
const { yupValidate } = require("../../middlewares/yup/yup.middleware");
const {
  userTypeCheck,
} = require("../../middlewares/permissions/userType.check");
const adminRoutes = new Router();

adminRoutes.get("/", authVerify, adminCheck, adminController.index);
adminRoutes.get(
  "/:id",
  authVerify,
  userTypeCheck,
  adminCheck,
  adminController.show
);
adminRoutes.delete(
  "/:id",
  authVerify,
  userTypeCheck,
  adminCheck,
  adminController.destroy
);
adminRoutes.post(
  "/",
  authVerify,
  adminCheck,
  yupValidate(adminYupSchema),
  adminController.store
);
adminRoutes.put(
  "/:id",
  authVerify,
  userTypeCheck,
  adminCheck,
  yupValidate(adminYupSchema),
  adminController.update
);

module.exports = adminRoutes;
