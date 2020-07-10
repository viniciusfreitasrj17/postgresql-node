const { Router } = require("express");

const UserController = require("./controllers/UserController");
const AddressController = require("./controllers/AddressController");
const TechController = require("./controllers/TechController");
const ReportController = require("./controllers/ReportController");

routes = Router();

// Create Users
routes.get("/users", UserController.index);
routes.post("/users", UserController.store);

// Create Addresses 1 -> N
routes.get("/users/:user_id/addresses", AddressController.index);
routes.post("/users/:user_id/addresses", AddressController.store);

// Create Techs N -> N
routes.get("/users/:user_id/techs", TechController.index);
routes.post("/users/:user_id/techs", TechController.store);
routes.delete("/users/:user_id/techs", TechController.destroy);

// Create Report
routes.get("/report", ReportController.show);

module.exports = routes;
