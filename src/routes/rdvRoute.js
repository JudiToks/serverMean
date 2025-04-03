const express = require('express')
const {getAllRDV, getByClient, createObject, updateObject, getRdvByPersonnel, countAllRdv, countRdvPending,
    countRdvLoading, countRdvAnnule, countRdvDone, getStatistiqueRdvParMois
} = require("../controllers/rdvController");
const router = express.Router()

router.get('/', getAllRDV)
router.get('/byClient/:idclient', getByClient)
router.get('/byPersonnel/:idpersonnel', getRdvByPersonnel)
router.post('/', createObject)
router.put('/update/:id', updateObject)
router.get('/countAllRdv', countAllRdv)
router.get('/countRdvPending', countRdvPending)
router.get('/countRdvLoading', countRdvLoading)
router.get('/countRdvAnnule', countRdvAnnule)
router.get('/countRdvDone', countRdvDone)
router.get('/stat', getStatistiqueRdvParMois)

module.exports = router