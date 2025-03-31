const express = require('express')
const {getDetailsPanierByPanier, createObject, getAllDetailsPanier} = require("../controllers/detailsPanierController");
const router = express.Router()

router.get('/', getAllDetailsPanier)
router.get('/:panierId', getDetailsPanierByPanier)
router.post('/', createObject)

module.exports = router