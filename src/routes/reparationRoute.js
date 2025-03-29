const express = require('express')
const {getAllReparation, getReparationByVoiture, createObject} = require("../controllers/reparationController");
const router = express.Router()

router.get('/', getAllReparation)
router.get('/:idvoiture', getReparationByVoiture)
router.post('/', createObject)

module.exports = router