const RDV = require("../models/rdv")

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
        const {idclient} = req.params
        const rdvs = await RDV.find({ client : { $regex : idclient, $options : 'i' } });
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getByClient : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getRdvByPersonnel = async (req, res) => {
    try
    {
        const {idpersonnel} = req.params
        const rdvs = await RDV.find({ personnel : { $regex : idpersonnel, $options : 'i' } });
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getRdvByPersonnel : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getRdvByEtat = async (req, res) => {
    try
    {
        const {etat} = req.params
        const rdvs = await RDV.find({ etat : { $regex : etat, $options : 'i' } });
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getRdvByEtat : ', error.message)
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

const updateObject = async (req, res) => {
    try
    {
        const {id} = req.params
        const rdv = await RDV.findByIdAndUpdate(id, req.body)
        res.status(200).json(rdv)
    }
    catch (error)
    {
        console.log('erreur update dans RDV : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllRDV,
    getByClient,
    createObject,
    updateObject,
    getRdvByPersonnel,
    getRdvByEtat
}