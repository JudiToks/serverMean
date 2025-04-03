const express = require('express')
const {getAllUsers, getUserByName, createObject, getAllPersonnel, updateObject, getUserById, countAllClient} = require("../controllers/userController");
const router = express.Router()

router.get('/', getAllUsers)
router.get('/userId/:id', getUserById)
router.get('/user/:name', getUserByName)
router.get("/allpersonnel", getAllPersonnel)
router.post('/', createObject)
router.put('/update/:id', updateObject)
router.get('/countAllClient', countAllClient)

module.exports = router;