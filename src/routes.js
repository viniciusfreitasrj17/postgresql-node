const { Router } = require("express");

routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello World" });
});

module.exports = routes;
