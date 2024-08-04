module.exports.adminCheck = () => async (req, res, next) => {
  try {
    if (res.loggedUser.userType != "Admin") {
      const err = new Error("Você não tem permissão para acessar!");
      err.code = 401;
      throw err;
    }
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Erro no tipo de local",
      errors: err.errors,
    });
  }
};
