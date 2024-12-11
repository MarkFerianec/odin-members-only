const errorHandler = (err, req, res, next) => {
  if (err.code === "23505") {
    return res.status(409).send("Username already taken");
  }

  next(err);
};

module.exports = {
  errorHandler,
};
