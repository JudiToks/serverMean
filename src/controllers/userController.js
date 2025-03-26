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

module.exports = {
    getAllUsers
}