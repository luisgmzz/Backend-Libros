require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/index");

// Initializations
const app = express();

// Server configuration
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use(routes);

// Starting the server
app.listen(app.get("port"), () => console.log("Server listening on port " + app.get("port")));
