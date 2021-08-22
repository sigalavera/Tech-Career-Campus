const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")

router.post('/', studentController.addNewStudent);
router.get('/', studentController.getStudent);
router.get('/GetStudentGradeById', studentController.getStudentGradeById);
router.post('/addStudentTestByName', studentController.AddStudentTestById);
router.post('/UpdateStudentGradeByName/:_id', studentController.UpdateStudentTestById);
router.delete('/DeleteStudentGradeByName/:_id', studentController.DeleteStudentTestById);
module.exports = router;