const express = require('express')
const {getAllProduits, createObject, updateObject, getProduitsArticle, getProduitsService} = require("../controllers/produitsController");
const router = express.Router()

router.get('/', getAllProduits)
router.post('/', createObject)
router.put('/update/:id', updateObject)
router.get('/allArticles', getProduitsArticle)
router.get('/allServices', getProduitsService)

module.exports = router