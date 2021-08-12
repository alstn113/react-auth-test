import express from "express";
import * as ctrl from "./ctrl.js";
import checkLoggedIn from "../../lib/checkLoggedIn.js";

const post = express.Router();

/**
 *   @description /api/post
 */

post.get("/", ctrl.list);
post.post("/", checkLoggedIn, ctrl.write);

post.get("/:id", ctrl.getPostById, ctrl.read);
post.patch("/:id", checkLoggedIn, ctrl.getPostById, ctrl.checkOwnPost, ctrl.update);
post.delete("/:id", checkLoggedIn, ctrl.getPostById, ctrl.checkOwnPost, ctrl.remove);

export default post;
