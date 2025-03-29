const express = require('express')
const {getAllUsers, getUserByName, createObject, getAllPersonnel} = require("../controllers/userController");
const router = express.Router()

router.get('/', getAllUsers)
router.get('/user/:name', getUserByName)
router.get("/allpersonnel", getAllPersonnel)
router.post('/', createObject)

module.exports = router;