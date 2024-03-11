const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const constants = require("../constants");

exports.setupExpress = () => {
  const app = express();

  app.use(express.json({ limit: "50mb" }));
  app.use(cors({ origin: "http://localhost:4200", credentials: true }));
  app.use(cookieParser());
  app.use("/images", express.static("images"));

  app.listen(constants.PORT, () => {
    console.log("Listening on port: " + constants.PORT);
  });

  return app;
};
