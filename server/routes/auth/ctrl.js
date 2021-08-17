import Joi from "joi";
import User from "../../schemas/user.js";

export const register = async (req, res, next) => {
  const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(20).required(),
    password: Joi.string().required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json(result.error);
  }
  const { username, password } = req.body;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      return res.status(409).json({ error: "이미 존재하는 계정입니다" });
    }
    const user = new User({ username });
    await user.setPassword(password);
    await user.save();
    const token = user.generateToken();
    return res.cookie("access_token", token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true }).json(user.serialize());
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(401).json({ error: "잘못된 값입니다." });
  }
  try {
    const user = await User.findByUsername(username);
    if (!user) {
      return res.status(401).json({ error: "존재하지 않는 계정입니다." });
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      return res.status(401).json({ error: "잘못된 비밀번호입니다." });
    }
    const token = user.generateToken();
    return res.cookie("access_token", token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true }).json(user.serialize());
  } catch (error) {
    console.error(error);
    next(error);
  }
};

export const check = async (req, res, next) => {
  const { user } = req.app.locals;
  console.log(user);
  if (!user) {
    return res.status(401).json({ error: "권한이 없습니다." });
  }
  return res.json(user);
};

export const logout = async (req, res, next) => {
  req.app.locals.user = null;
  return res.status(204).clearCookie("access_token").json({ success: true });
};
