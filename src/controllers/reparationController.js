const Reparation = require('../models/reparation')

const getAllReparation = async (req, res) => {
    try
    {
        const reparations = await Reparation.find()
        res.status(200).json(reparations)
    }
    catch (error)
    {
        console.log('erreur dans reparation : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getReparationByVoiture = async (req, res) => {
    try
    {
        const {idvoiture} = req.params
        const reparations = await Reparation.find({voiture: idvoiture})
        res.status(200).json(reparations)
    }
    catch (error)
    {
        console.log('erreur dans get reparation by voiture : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getReparationByRdv = async (req, res) => {
    try
    {
        const {rdvId} = req.params
        const reparations = await Reparation.find({ rdvId : rdvId }).populate('rdvId')
        res.status(200).json(reparations)
    }
    catch (error)
    {
        console.log('erreur dans get reparation by rdv : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const reparations = await Reparation.create(req.body);
        res.status(200).json(reparations)
    }
    catch (error)
    {
        console.log('erreur insertion dans Reparation : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports ={
    getAllReparation,
    getReparationByVoiture,
    createObject,
    getReparationByRdv
}