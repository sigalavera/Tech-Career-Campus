const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController")

router.post('/:id', studentController.addNewStudent);
router.get('/', studentController.getStudent);
router.get('/gradesById', studentController.getStudentGradeById);
router.post('/addTestById', studentController.addStudentTestById);
router.put('/updateTest/:_id', studentController.updateStudentTestById);
router.delete('/deleteTest/:_id', studentController.deleteStudentTestById);
module.exports = router;