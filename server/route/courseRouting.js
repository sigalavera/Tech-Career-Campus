const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController")

router.post('/', courseController.addNewCourse);

module.exports = router;