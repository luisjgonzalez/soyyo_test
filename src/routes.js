const express = require("express");
const router = express.Router();
const getEntities = require("./controllers.js");



router.post("/entities/filter" , getEntities);


module.exports = router