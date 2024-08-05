const { Router } = require("express");
const localController = require("../../controllers/LocalController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const { localCheck } = require("../../middlewares/permissions/local.check");
const { yupValidate } = require("../../middlewares/yup/yup.middleware");
const { localYupSchema } = require("../../middlewares/yup/local");
const {
  userTypeCheck,
} = require("../../middlewares/permissions/userType.check");
const localRoutes = new Router();

localRoutes.get("/", authVerify, localController.index);
localRoutes.get("/:id", authVerify, userTypeCheck, localController.show);
localRoutes.delete("/:id", authVerify, userTypeCheck, localController.destroy);
localRoutes.get("/:localId/maps", authVerify, localController.showMapLink);
localRoutes.post(
  "/",
  localCheck,
  authVerify,
  yupValidate(localYupSchema),
  localController.store
);
localRoutes.put(
  "/:id",
  authVerify,
  userTypeCheck,
  yupValidate(localYupSchema),
  localController.update
);

module.exports = localRoutes;
