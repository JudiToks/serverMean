const express = require('express')
const db_connect = require('./src/config/db')
const cors = require('cors')
const usersRoute = require("./src/routes/usersRoute")
const voituresRoute = require("./src/routes/voituresRoute")
const authenticateRoute = require("./src/routes/authenticateRoute")
const rdvRoute = require("./src/routes/rdvRoute")
const reparationRoute = require("./src/routes/reparationRoute")
const produitRoute = require("./src/routes/produitsRoute")
const {authMiddleware} = require("./src/services/authenticateService");
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
db_connect()

app.get('/mean', function (req, res) {
    res.send('Hello la famille!!')
})

app.use("/mean", authenticateRoute)
app.use("/mean/users", usersRoute)
app.use("/mean/voitures", voituresRoute)
app.use("/mean/rdv", authMiddleware, rdvRoute)
app.use("/mean/reparation", reparationRoute)
app.use("/mean/produits", produitRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});