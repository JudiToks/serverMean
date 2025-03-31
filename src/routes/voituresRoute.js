const express = require('express')
const {getAllVoitures, createObject, getByClient} = require("../controllers/voituresController");
const router = express.Router()

router.get('/', getAllVoitures)
router.get('/byClient/:idclient', getByClient)
router.post('/', createObject)

module.exports = router;