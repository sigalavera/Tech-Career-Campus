const express = require("express");
const router = express.Router();
const login = require('../controller/authorization/login');
const register = require('../controller/authorization/register');

router.post('/login', login);
router.post('/', register);

module.exports = router;