const express = require("express");
const { Task } = require("../models");

router = express.Router();

router.post("/create", async (req, res) => {
  const { title, description, deadline, priority, category, userId } = req.body;

  try {
    const newTask = await Task.create({
      title,
      description,
      deadline,
      priority,
      category,
      userId,
    });
    res.status(201).json({ message: "Task created", task: newTask });
  } catch (error) {
    next(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
});

router.get("/find/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
});

router.put("/update/:id", async (req, res) => {
  const { title, description, deadline, priority, category } = req.body;
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.deadline = deadline || task.deadline;
    task.priority = priority || task.priority;
    task.category = category || task.category;

    await task.save();
    res.json({ message: "Task updated", task });
  } catch (error) {
    next(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.destroy();
    res.json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
