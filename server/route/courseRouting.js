const express = require("express");
const router = express.Router();
const courseController = require("../controller/courseController");
const {authRole} = require('../controller/authentication/auth');

router.post('/',authRole("Staff"), courseController.addNewCourse);
router.get('/',authRole("Staff"), courseController.getAllCourses);
router.post('/getCourseByName', courseController.getCourseByName);
router.delete('/deleteSubSubject', authRole("Staff"), courseController.deleteSubSubject);
router.post('/addSubSubject', authRole("Staff"), courseController.addSubSubject);
router.put('/updateSubSubject', authRole("Staff"), courseController.updateSubSubject);
router.put('/updateSubject', authRole("Staff"), courseController.updateSubject);
router.get('/students',authRole("Staff"),courseController.getStudentsByCourse)

module.exports = router;