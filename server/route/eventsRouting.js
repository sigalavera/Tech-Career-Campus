const express = require('express');
const router = express.Router();
const eventController = require('../controller/eventController');

router.get('/',eventController.getAllEventPost);
router.get('/getEventById', eventController.getEventById);
router.post('/', eventController.PostnewEvent);
router.delete('/', eventController.deleteEventPost);
router.put('/:id', eventController.updateEventPost);

module.exports = router;