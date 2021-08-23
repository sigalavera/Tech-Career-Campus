const express = require("express");
const router = express.Router();
const messagesController = require("../controller/messagesController")

router.post('/staff', messagesController.MessagesByStaff);
router.post('/student', messagesController.MessagesByStudent);
module.exports = router;