const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];
let taskIdCounter = 1;

const findTaskById = (id) => tasks.find((task) => task.id === id);

app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = findTaskById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.status(200).json(task);
});

// 3. POST /tasks - Create a new task
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  const newTask = {
    id: taskIdCounter++,
    title,
    description,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { title, description } = req.body;

  const task = findTaskById(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required" });
  }

  task.title = title;
  task.description = description;

  res.status(200).json(task);
});
app.delete("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((task) => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ message: "Task deleted successfully" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An unexpected error occurred" });
});

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
