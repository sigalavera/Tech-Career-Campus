const express = require("express");
const router = express.Router();
const staffController = require("../controller/staffController")

router.post('/', staffController.addNewStaff);

module.exports = router;