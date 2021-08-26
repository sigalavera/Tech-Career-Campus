const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');
const {authUser,authRole} = require('../controller/authentication/auth');

router.get('/',eventController.getAllEventPost);
router.get('/getEventById', eventController.getEventById);
router.post('/',authRole(req.body.role), eventController.PostnewEvent);
router.delete('/',authRole(req.body.role), eventController.deleteEventPost);
router.put('/:id',authRole(req.body.role), eventController.updateEventPost);

module.exports = router;