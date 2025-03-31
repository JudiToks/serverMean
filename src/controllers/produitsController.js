const Produits = require('../models/produits')

const getAllProduits = async (req, res) => {
    try
    {
        const produits = await Produits.find();
        res.status(200).json(produits)
    }
    catch (error)
    {
        console.log("Erreur dans getAllProduits : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const produits = await Produits.create(req.body);
        res.status(200).json(produits)
    }
    catch (error)
    {
        console.log('erreur insertion dans Produits : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const updateObject = async (req, res) => {
    try
    {
        const {id} = req.params
        const rdv = await Produits.findByIdAndUpdate(id, req.body)
        res.status(200).json(rdv)
    }
    catch (error)
    {
        console.log('erreur update dans Produits : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getProduitsArticle = async (req, res) => {
    try
    {
        const produits = await Produits.find({ typeproduit : { $regex : 'article', $options : 'i' } });
        res.status(200).json(produits)
    }
    catch (error)
    {
        console.log("Erreur dans getProduitsArticle : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getProduitsService = async (req, res) => {
    try
    {
        const produits = await Produits.find({ typeproduit : { $regex : 'service', $options : 'i' } });
        res.status(200).json(produits)
    }
    catch (error)
    {
        console.log("Erreur dans getProduitsService : ", error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllProduits,
    createObject,
    updateObject,
    getProduitsArticle,
    getProduitsService
}