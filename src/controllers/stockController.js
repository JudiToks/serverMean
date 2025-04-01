const Stock = require("../models/stock")

const createObject = async (req, res) => {
    try
    {
        const stock = await Stock.create(req.body)
        res.status(200).json(stock)
    }
    catch (error)
    {
        console.log("Erreur dans insertion Stock : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getStockProduit = async (req, res) => {
    try
    {
        const {produitId} = req.params
        const stock = await Stock.find({produitId: produitId}).populate("produitId")
        res.status(200).json(stock)
    }
    catch (error)
    {
        console.log("Erreur dans getStockProduit : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getAllStock = async (req, res) => {
    try
    {
        const stock = await Stock.find().populate("produitId")
        res.status(200).json(stock)
    }
    catch (error)
    {
        console.log("Erreur dans getStockProduit : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const updateObject = async (req, res) => {
    try
    {
        const {produitId}  = req.params
        const stock = await Stock.findByIdAndUpdate(produitId, req.body)
        res.status(200).json(stock)
    }
    catch (error)
    {
        console.log("Erreur dans udpdate stock : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const checkStock = async (req, res) => {
    try
    {
        const {produitId, qte} = req.body
        const stock = await Stock.findOne({produitId: produitId})
        if (!stock)
        {
            return res.status(404).json({message : "Aucun stock pour ce produit"})
        }
        if (stock.qte < qte)
        {
            return res.status(200).json({
                success: false,
                message: "Stock insuffisant",
                disponible: stock.qte
            })
        }
        else
        {
            const new_qte = stock.qte - qte
            const temp = await Stock.findOneAndUpdate(
                { produitId: produitId },  // Critère de recherche
                { qte: new_qte }  // La nouvelle valeur à mettre à jour
            )
            // return res.status(200).json({
            //     success: true,
            //     message: "Ajouter au panier",
            //     qte: qte
            // })
            return res.status(200).json(temp)
        }
    }
    catch (error)
    {
        console.log("Stock insuffisante")
        return res.status(500).json({message : error.message})
    }
}

module.exports = {
    createObject,
    updateObject,
    getStockProduit,
    getAllStock,
    checkStock
}