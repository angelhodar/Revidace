function errorHandler(err, req, res, next) {
  // More complex logger can be implemented here
  console.error(err);
  if (res.headersSent) return next(err);
  return res.status(500).send("Unexpected error happened!");
}

module.exports = errorHandler;
