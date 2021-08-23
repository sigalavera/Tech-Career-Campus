const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

const chalk = require("chalk");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}))
const routeStudent = require("./route/studentRouting");
const routeCourse = require("./route/courseRouting");
const routeStaff = require("./route/staffRouting");
const routeMessage = require('./route/messagesRouting')
const routeSchedule = require('./route/classScheduleRouting')
const db = require("./DB");

db.on("error", () => {
    console.log(chalk.red("Connection error"));
});


app.use('/api/student',routeStudent);
app.use('/api/course',routeCourse);
app.use('/api/staff',routeStaff);
app.use('/api/message',routeMessage);
app.use('/api/schedule',routeSchedule);

app.listen(PORT, () => {
    console.log(
        `${chalk.green("tech_career")} ${chalk.yellow(
      "live and up on port"
    )} ${chalk.blue(PORT)}`
    );
});

