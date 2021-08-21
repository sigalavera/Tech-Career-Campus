const express = require('express')
const router = express.Router();
const scheduleCtrl = require('../controller/scheduleController');


router.get('/',scheduleCtrl.getAllClasses);
router.put('/',scheduleCtrl.updateClasses);
router.post('/',scheduleCtrl.postClasses);


module.exports = router ;