const express = require("express");
const morgan = require("morgan");

const app = express();


const restrictionRoutes = require("./routes/restriction");

app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use("/restrictions", restrictionRoutes);

module.exports = app; 

