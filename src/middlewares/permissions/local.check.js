module.exports.localCheck = () => async (req, res, next) => {
  try {
    if (res.loggedUser.userType != "basico") {
      next();
    }

    req.body.type = "basico";
    next();
  } catch (err) {
    return res.status(400).json({
      message: "Erro no tipo de local",
      errors: err.errors,
    });
  }
};
