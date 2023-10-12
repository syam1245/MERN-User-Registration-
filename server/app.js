const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const postSchema = new mongoose.Schema({
//   name: String,
//   email: String
// });

// const Post = mongoose.model('Post', postSchema);

const userRoutes = require('./routes/userRoutes');
app.use("/api/v1", userRoutes);

module.exports= app
