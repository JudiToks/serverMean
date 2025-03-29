const Users = require("../models/users");

const getAllUsers = async (req, res) => {
    try
    {
        const user = await Users.find();
        res.status(200).json(user)
    }
    catch (error)
    {
        console.log('erreur dans users : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getUserByName = async (req, res) => {
    try
    {
        const {name} = req.params
        const user = await Users.find({name : {$regex : name, $options : 'i'}});
        res.status(200).json(user)
    }
    catch (error)
    {
        console.log('erreur dans users : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const user = await Users.create(req.body)
        res.status(200).json(user)
    }
    catch (error)
    {
        console.log("erreur insertion users : ", e.message)
        res.status(500).json({message : error.message})
    }

}

const getAllPersonnel = async (req, res) => {
    try
    {
        const user = await Users.find({role : { $gt: 25, $lt: 75 } });
        res.status(200).json(user)
    }
    catch (error)
    {
        console.log('erreur dans users : ', error.message)
        res.status(500).json({message : error.message})
    }
}

module.exports = {
    getAllUsers,
    getUserByName,
    createObject,
    getAllPersonnel
}