const express = require('express')
const {getAllPanier, getPanierByClient, createObject} = require("../controllers/panierController");
const router = express.Router()

router.get('/', getAllPanier)
router.get('/byClient/:clientId', getPanierByClient)
router.post('/', createObject)

module.exports = router