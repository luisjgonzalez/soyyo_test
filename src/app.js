const express = require("express");
const morgan = require("morgan");
const axios = require("axios");
const app = express();


//config express
app.use(
  express.urlencoded({
    extended: true
		    })
);
app.use(morgan("tiny"));
app.use(express.json());

//Routes 
app.use(require("./routes.js"));

module.exports = app;
