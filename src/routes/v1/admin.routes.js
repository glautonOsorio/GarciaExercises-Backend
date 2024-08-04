const { Router } = require("express");
const adminController = require("../../controllers/AdminController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const adminRoutes = new Router();

adminRoutes.post("/", authVerify, adminController.store);
adminRoutes.get("/", authVerify, adminController.index);
adminRoutes.get("/:id", authVerify, adminController.show);
adminRoutes.put("/:id", authVerify, adminController.update);
adminRoutes.delete("/:id", authVerify, adminController.destroy);

module.exports = adminRoutes;
