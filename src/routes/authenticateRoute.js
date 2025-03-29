const express = require('express')
const {testLogin, register, decodeForId, decodeForRole} = require("../services/authenticateService");
const router = express.Router()

router.post('/register', register)
router.post('/testLogin', testLogin)
router.get('/getRole', decodeForRole)
router.get('/getUserId', decodeForId)

module.exports = router