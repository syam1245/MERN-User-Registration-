const app = require("./app")

const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const databaseConnection =require("./config/databaseConnection");

dotenv.config({ path: './config/config.env' });

databaseConnection();




app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
});
