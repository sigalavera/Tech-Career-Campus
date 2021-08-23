const express = require("express");
const router = express.Router();
const staffController = require("../controller/staffController")

router.post('/', staffController.addNewStaff);
router.get('/', staffController.getAllStaff);
router.get('/getAllStaffById', staffController.getAllStaffById);
router.delete('/', staffController.deleteStaffById);
router.put('/:id', staffController.updateStaffById);

module.exports = router;