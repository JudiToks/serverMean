const express = require('express')
const {getAllRDV, getByClient, createObject, updateObject, getRdvByPersonnel} = require("../controllers/rdvController");
const router = express.Router()

router.get('/', getAllRDV)
router.get('/:idclient', getByClient)
router.get('/:idpersonnel', getRdvByPersonnel)
router.post('/', createObject)
router.put('/:id', updateObject)

module.exports = router