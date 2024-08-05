module.exports.adminCheck = async (req, res, next) => {
  try {
    if (!res.loggedUser || res.loggedUser.userType.name !== "admin") {
      const err = new Error("Você não tem permissão para acessar!");
      err.code = 401;
      throw err;
    }
    next();
  } catch (err) {
    return res.status(err.code || 400).json({
      message: "Erro ao verificar tipo de usuário",
      errors: err.message,
    });
  }
};
