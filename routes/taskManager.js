const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskManagerController");

// router.route("/").get(getTaskData).post(addTask);
router.get("/", taskController.getTaskData);
router.post("/", taskController.addTask);

module.exports = router