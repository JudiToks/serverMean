const Panier = require('../models/panier')

const getAllPanier = async (req, res) => {
    try
    {
        const paniers = await Panier.find().populate('clientId');
        res.status(200).json(paniers)
    }
    catch (error)
    {
        console.log("Erreur dans getAllPanier: ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getPanierByClient = async (req, res) => {
    try
    {
        const {clientId} = req.params
        const paniers = await Panier.find({ clientId : { $regex : clientId, $options : 'i' } }).populate('clientId');
        res.status(200).json(paniers)
    }
    catch (error)
    {
        console.log("Erreur dans getAllPanier: ", error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const panier = await Panier.create(req.body);
        res.status(200).json(panier)
    }
    catch (error)
    {
        console.log('erreur insertion dans Panier : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllPanier,
    getPanierByClient,
    createObject
}