const express = require('express')
const db_connect = require('./src/config/db')
const usersRoute = require("./src/routes/usersRoute")
const voituresRoute = require("./src/routes/voituresRoute")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(express.json())
db_connect()

app.get('/mean', function (req, res) {
    res.send('Hello la famille!!')
})

app.use("/mean/users", usersRoute)
app.use("/mean/voitures", voituresRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});