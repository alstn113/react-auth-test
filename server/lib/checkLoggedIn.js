const checkLoggedIn = (req, res, next) => {
  if (!req.app.locals.user) {
    return res.status(401).json({ error: "로그인한 사용자만 접근 가능합니다" });
  }
  return next();
};

export default checkLoggedIn;
