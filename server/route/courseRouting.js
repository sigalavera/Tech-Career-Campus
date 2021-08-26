const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const {authRole} = require('../controller/authentication/auth');

router.post('/',authRole(req.body.role), courseController.addNewCourse);
router.get('/',authRole(req.body.role), courseController.getAllCourses);
router.get('/getCourseByName',authRole(req.body.role), courseController.getCourseByName);

module.exports = router;