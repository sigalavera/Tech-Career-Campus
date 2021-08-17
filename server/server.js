const dotenv = require("dotenv");
dotenv.config();

const chalk = require("chalk");
const express = require("express");
const db = require("./DB");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors())
db.on("error", () => {
    console.log(chalk.red("Connection error"));
});


app.listen(PORT, () => {
    console.log(
        `${chalk.green("tech_career")} ${chalk.yellow(
      "live and up on port"
    )} ${chalk.blue(PORT)}`
    );
});

