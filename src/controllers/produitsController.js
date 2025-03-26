import Produits from "../models/produits";

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

module.exports = {
    getAllProduits,
    createObject
}