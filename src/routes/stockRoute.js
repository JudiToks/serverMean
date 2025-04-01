const express = require('express')
const {createObject, getStockProduit, updateObject, getAllStock, checkStock} = require("../controllers/stockController");
const router = express.Router()

router.post('/', createObject)
router.put('/update/:produitId', updateObject)
router.get('/:produitId', getStockProduit)
router.get('/', getAllStock)
router.post('/check-stock', checkStock)

module.exports = router