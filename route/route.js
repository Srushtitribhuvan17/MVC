const {
  getdata,
  insertdata,
  editData,
  updateData,
  deleteData,
} = require("../controller/controller");

const express = require("express");

const router = express.Router();

router.get("/", getdata);
router.post("/add", insertdata);
router.get("/edit/:id", editData);
router.post("/update/:id", updateData);
router.get("/delete/:id", deleteData);

module.exports = router;
