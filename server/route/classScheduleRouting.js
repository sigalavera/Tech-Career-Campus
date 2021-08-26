const express = require('express')
const router = express.Router();
const scheduleCtrl = require('../controller/classScheduleController');
const {authRole} = require('../controller/authentication/auth');


router.get('/',scheduleCtrl.getAllClasses);
router.put('/',authRole(req.body.role),scheduleCtrl.updateClasses);
router.post('/',authRole(req.body.role),scheduleCtrl.postClasses);
router.delete('/',authRole(req.body.role),scheduleCtrl.deleteClasses)
router.put('/updateClassesName',authRole(req.body.role),scheduleCtrl.updateClassesName)


module.exports = router;