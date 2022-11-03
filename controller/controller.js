const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const Task = require("./../model/task");
const connection = require("./../db");

connection();
const deleteTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
  try {
    const response = await Task.deleteOne({_id:id});
    return res.json({ status: "succsess", data: response });
  } catch (error) {
    console.log("error");
    throw error;
  }
});

const markTask = asyncHandler(async (req, res) => {
    const id = req.params.id;
  try {
    const response = await Task.findOneAndUpdate({_id:id},{$set: {"complete":true}});
    return res.json({ status: "succsess", data: response });
  } catch (error) {
    console.log("error");
    throw error;
  }
});

const getTasks = asyncHandler(async (req, res) => {
  try {
    const response = await Task.find().sort({_id:0});
    return res.json({ status: "succsess", data: response });
  } catch (error) {
    console.log("error");
    throw error;
  }
});

const addTask = asyncHandler(async (req, res) => {
  const { task } = req.body;

  try {
    const response = await Task.create({ task });
    return res.json({ status: "succsess", data: response });
  } catch (error) {
    console.log("error");
    throw error;
  }
});

module.exports = {
  addTask,
  getTasks,
  deleteTask,
  markTask
};
