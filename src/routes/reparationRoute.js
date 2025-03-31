const express = require('express')
const {getAllReparation, getReparationByVoiture, createObject, getReparationByRdv} = require("../controllers/reparationController");
const router = express.Router()

router.get('/', getAllReparation)
router.get('/byVoiture/:idvoiture', getReparationByVoiture)
router.get('/byRdv/:rdvId', getReparationByRdv)
router.post('/', createObject)

module.exports = router