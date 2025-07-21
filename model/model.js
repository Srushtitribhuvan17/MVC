const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  Name: String,
  Salary: Number,
});

const Model = mongoose.model("mvc", Schema);

module.exports = Model;
