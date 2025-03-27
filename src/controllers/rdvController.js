const RDV = require("src/models/rdv")

const getAllRDV = async (req, res) => {
    try
    {
        const rdvs = await RDV.find()
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log("Erreur dans getAllRDV : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getByClient = async (req, res) => {
    try
    {
        const {id} = req.params
        const rdvs = await RDV.findOne(id);
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getByClient : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const rdvs = await RDV.create(req.body);
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur insertion dans RDV : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllRDV,
    getByClient,
    createObject
}