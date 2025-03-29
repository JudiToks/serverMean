const express = require('express')
const {testLogin, register} = require("../services/authenticateService");
const router = express.Router()

router.post('/register', register)
router.post('/testLogin', testLogin)

module.exports = router