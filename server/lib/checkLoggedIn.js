const checkLoggedIn = (req, res, next) => {
  if (!req.app.locals.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  return next();
};

export default checkLoggedIn;
