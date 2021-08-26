const express = require("express");
const router = express.Router();
const isToken = require("../controller//authorization/isToken")
const studentController = require("../controller/studentController")
const {authRole} = require('../controller/authentication/auth');

router.post('/',authRole(req.body.role) , studentController.addNewStudent);
router.get('/', studentController.getStudent);
router.get('/gradesById', studentController.getStudentGradeById);
router.post('/addTestById', authRole(req.body.role), studentController.addStudentTestById);
router.put('/updateTest/:_id', authRole(req.body.role), studentController.updateStudentTestById);
router.delete('/deleteTest/:_id', authRole(req.body.role), studentController.deleteStudentTestById);
module.exports = router;