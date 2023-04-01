const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const errorMiddleware = require("./middleware/error");

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

//Route Imports

const room = require("./routes/roomRoute");

app.use("/api/v1", room);

//middleware for errors

app.use(errorMiddleware);

module.exports = app;
