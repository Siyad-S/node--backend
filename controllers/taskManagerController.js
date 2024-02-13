const asyncHandler = require("express-async-handler");
const taskData = require("../models/taskManager");

const getTaskData = asyncHandler(async (req, res) => {
  try {
    const tasks = await taskData.find();

    if (!tasks) {
      res.status(404).json({ message: "Task data doesn't found" });
    } else {
      res.status(200).json({ message: "Task data gotten successfully", tasks });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const addTask = asyncHandler(async (req, res) => {
    try {
      const { title, description, pin, taskWithSubTask } = req.body;
  
      if (!title || !description || !pin) {
        res.status(404).json({ message: "Task data fields want to be filled" });
      } else {
        let postData;
        if (taskWithSubTask) {
          if (!title || !pin) {
            res.status(404).json({ message: "Task data fields want to be filled" });
          } else {
            postData = await taskData.create({
              title,
              taskWithSubTask,
              pin,
            });
          }
        } else {
          postData = await taskData.create({
            title,
            description,
            pin,
          });
        }
        res.status(200).json({ message: "Task data posted successfully", postData });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

// const updateTaskData = asyncHandler(async (req, res) => {
//   try {
//     const taskData = await service.getTasks();

//     if (!taskData) {
//       res.status(404).json({ message: "Task data doesn't found" });
//     } else {
//       res
//         .status(200)
//         .json({ message: "Task data gotten successfully", taskData });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

// const deleteTaskData = asyncHandler(async (req, res) => {
//   try {
//     const taskData = await service.getTasks();

//     if (!taskData) {
//       res.status(404).json({ message: "Task data doesn't found" });
//     } else {
//       res
//         .status(200)
//         .json({ message: "Task data gotten successfully", taskData });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

module.exports = {
  getTaskData,
  addTask,
//   updateTaskData,
//   deleteTaskData,
};
