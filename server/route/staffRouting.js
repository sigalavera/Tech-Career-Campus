const express = require("express");
const router = express.Router();
const staffController = require("../controller/staffController")
const {authRole} = require('../controller/authentication/auth');

router.post('/',authRole(req.body.role), staffController.addNewStaff);
router.get('/', staffController.getAllStaff);
router.get('/getAllStaffById', staffController.getAllStaffById);
router.delete('/',authRole(req.body.role), staffController.deleteStaffById);
router.put('/:id',authRole(req.body.role), staffController.updateStaffById);

module.exports = router;