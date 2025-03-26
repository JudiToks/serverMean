const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    collection: "users"
})

const Users = mongoose.model("users", UsersSchema)

module.exports = Users;