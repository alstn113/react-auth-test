import "./config.js";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import apiRouter from "./routes/index.js";
import jwtMiddleware from "./lib/jwtMiddleware.js";
import connect from "./schemas/index.js";

const app = express();
app.set("port", process.env.PORT || 3000);
connect();

app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(jwtMiddleware);

app.use("/api", apiRouter);

app.use((req, res, next) => {
  res.status(404).send("Sorry cant find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
