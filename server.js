const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const dotenv = require("dotenv").config()
const connectDb = require("./configs/dbConnection")
const controller = require("./controllers/taskManagerController")
app.use(cors())
app.use(express.json())

app.use("/tasks", controller)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

connectDb()