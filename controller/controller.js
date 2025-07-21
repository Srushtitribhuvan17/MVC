const mongoose = require("mongoose");
const model = require("../model/model");

const getdata = async (req, resp) => {
  try {
    const result = await model.find();
    resp.render("index", { result: result });
  } catch (error) {
    console.log(error);
  }
};

const insertdata = async (req, resp) => {
  try {
    const result = new model({
      Name: req.body.Name,
      Salary: req.body.Salary,
    });
    const data = await result.save();
    resp.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const editData = async (req, res) => {
  try {
    const data = await model.findById(req.params.id);
    res.render("edit", { data });
  } catch (error) {
    console.log(error);
  }
};

const updateData = async (req, res) => {
  try {
    await model.findByIdAndUpdate(req.params.id, {
      Name: req.body.Name,
      Salary: req.body.Salary,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async (req, res) => {
  try {
    await model.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getdata, insertdata, editData, updateData, deleteData };
