const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({
    title,
    description,
    user: req.user.id,
  });

  res.status(201).json(task);
};

// GET ALL TASKS (for logged-in user)
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    req.body,
    { new: true }
  );

  res.json(task);
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user.id,
  });

  res.json({ message: "Task deleted" });
};
