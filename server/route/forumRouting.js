const express = require("express");
const router = express.Router();
const messagesController = require("../controller/forumController");
const {authRole} = require('../controller/authentication/auth');

router.post("/staff", messagesController.messagesByStaff);
router.post("/student", messagesController.messagesByStudent);
router.get("/", messagesController.getAllMessages);
router.delete("/:id", authRole("Staff"), messagesController.deleteMessage);

module.exports = router;