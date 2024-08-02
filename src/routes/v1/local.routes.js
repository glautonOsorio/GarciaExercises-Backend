const { Router } = require("express");
const localController = require("../../controllers/LocalController");
const {
  authVerify,
} = require("../../middlewares/auth/authentication.middlewares");
const localRoutes = new Router();

localRoutes.post("/", authVerify, localController.store);
localRoutes.get("/", authVerify, localController.index);
localRoutes.get("/:id", authVerify, localController.show);
localRoutes.put("/:id", authVerify, localController.update);
localRoutes.delete("/:id", authVerify, localController.destroy);
localRoutes.get("/:localId/maps", authVerify, localController.showMapLink);

module.exports = localRoutes;
