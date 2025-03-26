const express = require('express')
const {getAllProduits, createObject} = require("../controllers/produitsController");
const router = express.Router()

router.get('/', getAllProduits)
router.post('/', createObject)

module.exports = router