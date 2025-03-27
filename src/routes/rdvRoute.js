const express = require('express')
const {getAllRDV, getByClient, createObject} = require("../controllers/rdvController");
const router = express.Router()

router.get('/', getAllRDV)
router.get('/:id', getByClient)
router.post('/', createObject)

module.exports = router