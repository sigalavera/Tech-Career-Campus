const express = require('express');
const router = express.Router()
const messageCtrl = require('../controller/messageController')

router.get('/',messageCtrl.getAllMessages)

router.post('/',messageCtrl.addNewMessage)

router.delete('/:id',messageCtrl.deleteMessage)
  



module.exports = router