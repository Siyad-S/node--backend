const { timeStamp } = require("console");
const mongoose = require("mongoose");

const taskManager = mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    taskWithSubTask: [
      {
        description: {
          type: String,
        },
      },
    ],
    pin: {
      type: Number,
    },
  },
  { timeStamps: true }
);

const tasksCollection = new mongoose.model("task", taskManager);
module.exports = tasksCollection;
