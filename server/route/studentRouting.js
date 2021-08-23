const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")

router.post('/', studentController.addNewStudent);
router.get('/', studentController.getStudent);
router.get('/gradesById', studentController.getStudentGradeById);
router.post('/addTestById', studentController.addStudentTestById);
router.post('/updateTest/:_id', studentController.updateStudentTestById);
router.delete('/deleteTest/:_id', studentController.deleteStudentTestById);
module.exports = router;