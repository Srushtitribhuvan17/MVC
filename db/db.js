const mongoose = require("mongoose");

const ConnectDb = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mvc")
    .then(() => {
      console.log("Connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = ConnectDb;
