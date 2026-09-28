import express from "express";
import mongoose from "mongoose";
import { Todo } from "./models/Todo.js";

const app = express();
const port = 3000;

async function startServer() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
    console.log("MongoDB connected");

    app.get("/", async (req, res) => {
      const todo = new Todo({
        name: "First Todo",
        desc: "Description of this todo",
        isDone: false
      });

      await todo.save();
      res.send("Todo saved successfully");
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err) {
    console.error("Startup error:", err);
  }
}

startServer();
