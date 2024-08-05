module.exports.userTypeCheck = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!Number.isInteger(Number.parseInt(id))) {
      const err = new Error("O Id do parâmetro deve ser um número inteiro");
      err.code = 400;
      throw err;
    }

    if (
      parseInt(id) !== res.loggedUser.id &&
      res.loggedUser.userType.name !== "admin"
    ) {
      const err = new Error("Você não tem permissão para usar essa rota");
      err.code = 403;
      throw err;
    }

    next();
  } catch (err) {
    return res.status(err.code || 400).json({
      message: err.message,
      errors: err.errors || null,
    });
  }
};
