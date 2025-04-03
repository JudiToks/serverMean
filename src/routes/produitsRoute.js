const express = require('express')
const {getAllProduits, createObject, updateObject, getProduitsArticle, getProduitsService, getById} = require("../controllers/produitsController");
const router = express.Router()

router.get('/', getAllProduits)
router.post('/', createObject)
router.put('/update/:id', updateObject)
router.get('/allArticles', getProduitsArticle)
router.get('/allServices', getProduitsService)
router.get('/byId/:id', getById)

module.exports = router