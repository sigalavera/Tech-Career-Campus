const express = require('express')
const router = express.Router();
const scheduleCtrl = require('../controller/classScheduleController');


router.get('/',scheduleCtrl.getAllClasses);
router.put('/',scheduleCtrl.updateClasses);
router.post('/',scheduleCtrl.postClasses);
router.delete('/',scheduleCtrl.deleteClasses)

module.exports = router;