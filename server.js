const express = require('express')
const db_connect = require('./src/config/db')
const cors = require('cors')
const usersRoute = require("./src/routes/usersRoute")
const voituresRoute = require("./src/routes/voituresRoute")
const authenticateRoute = require("./src/routes/authenticateRoute")
const rdvRoute = require("./src/routes/rdvRoute")
const reparationRoute = require("./src/routes/reparationRoute")
const produitRoute = require("./src/routes/produitsRoute")
const panierRoute = require("./src/routes/panierRoute")
const detailsPanierRoute = require("./src/routes/detailsPanierRoute")
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
app.use("/mean/rdv", rdvRoute)
app.use("/mean/reparation", reparationRoute)
app.use("/mean/produits", produitRoute)
app.use("/mean/panier", panierRoute)
app.use("/mean/detailsPanier", detailsPanierRoute)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

//67e7d117f887165d786e95c9 user dev
//67ea4aa94c701b4caf38b174 id panier