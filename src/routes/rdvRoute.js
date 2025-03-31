const express = require('express')
const {getAllRDV, getByClient, createObject, updateObject, getRdvByPersonnel} = require("../controllers/rdvController");
const router = express.Router()

router.get('/', getAllRDV)
router.get('/byClient/:idclient', getByClient)
router.get('/byPersonnel/:idpersonnel', getRdvByPersonnel)
router.post('/', createObject)
router.put('/update/:id', updateObject)

module.exports = router