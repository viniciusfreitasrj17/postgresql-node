const express = require("express");
const routes = require("./routes");

require("./database");

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Creating Structure Data Base:
 *
 * First: Create Migration (create table, field, etc)
 * Second: Create Model (all field from table)
 * Third: Add Model connection in database file
 * Fourth: Create route
 * Fifth: Create Controller
 * Sixth: If Relation, create method associate and call in database file
 *
 **/
