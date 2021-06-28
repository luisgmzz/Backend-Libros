require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes/index");

// Initializations
const app = express();

// Server configuration
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(
    cors({
        origin: "*",
        methods: ["POST", "GET", "PUT", "DELETE"],
        credentials: true
    })
);

// Routes
app.use(routes);

// Starting the server
app.listen(app.get("port"), () => console.log("Server listening on port " + app.get("port")));
