const ConnectDb = require("./db/db");
const express = require("express");
const router = require("./route/route");

const app = express();
ConnectDb();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", router);

app.listen(4000, () => {
  console.log("Server is running");
});
