const Voitures = require("../models/voiture");

const getAllVoitures = async (req, res) => {
    try
    {
        const voiture = await Voitures.find();
        res.status(200).json(voiture)
    }
    catch (error)
    {
        console.log('erreur dans voitures : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getByClient = async (req, res) => {
    try
    {
        const {idclient} = req.params
        const voiture = await Voitures.find({ client : { $regex : idclient, $options : 'i' } });
        res.status(200).json(voiture)
    }
    catch (error)
    {
        console.log('erreur dans voitures : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const voiture = await Voitures.create(req.body);
        res.status(200).json(voiture)
    }
    catch (error)
    {
        console.log('erreur insertion dans voitures : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllVoitures,
    getByClient,
    createObject
}