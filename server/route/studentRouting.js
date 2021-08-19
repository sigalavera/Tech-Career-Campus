const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")

router.post('/', studentController.addNewStudent);
router.get('/', studentController.getStudent);

module.exports = router;