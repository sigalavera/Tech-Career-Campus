const express = require('express');
const router = express.Router()
const forumCtrl = require('../controller/forumController')

router.get('/',forumCtrl.getAllMessages)

router.post('/',forumCtrl.addNewMessage)

router.delete('/:id',forumCtrl.deleteMessage)
  



module.exports = router