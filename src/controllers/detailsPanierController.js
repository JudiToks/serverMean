const mongoose = require('mongoose')
const DetailsPanier = require("../models/detailsPanier");

const getAllDetailsPanier = async (req, res) => {
    try
    {
        const detailsPaniers = await DetailsPanier.find().populate('produitId');
        res.status(200).json(detailsPaniers)
    }
    catch (error)
    {
        console.log("Erreur dans getAllDetailsPanier: ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getDetailsPanierByPanier = async (req, res) => {
    try
    {
        const {panierId} = req.params
        const detailsPaniers = await DetailsPanier.find({ panierId: panierId }).populate('produitId');
        res.status(200).json(detailsPaniers)
    }
    catch (error)
    {
        console.log("Erreur dans getDetailsPanierByPanier: ", error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const detailsPaniers = await DetailsPanier.create(req.body);
        res.status(200).json(detailsPaniers)
    }
    catch (error)
    {
        console.log('erreur insertion dans detailsPaniers : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllDetailsPanier,
    getDetailsPanierByPanier,
    createObject
}