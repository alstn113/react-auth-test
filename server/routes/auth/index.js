import express from "express";
import * as ctrl from "./ctrl.js";

const auth = express.Router();

/**
 *   @description /api/auth
 */

auth.post("/register", ctrl.register);
auth.post("/login", ctrl.login);
auth.get("/check", ctrl.check);
auth.post("/logout", ctrl.logout);

export default auth;
