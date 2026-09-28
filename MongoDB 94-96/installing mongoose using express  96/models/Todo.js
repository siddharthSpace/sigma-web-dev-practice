import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    default: false
  }
});

export const Todo = mongoose.model("Todo", TodoSchema);