const express = require('express')
const {getAllVoitures, createObject, getByClient, getById} = require("../controllers/voituresController");
const router = express.Router()

router.get('/', getAllVoitures)
router.get('/byClient/:idclient', getByClient)
router.get('/byId/:id', getById)
router.post('/', createObject)

module.exports = router;