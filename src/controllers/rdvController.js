const RDV = require("../models/rdv")

const getAllRDV = async (req, res) => {
    try
    {
        const rdvs = await RDV.find()
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log("Erreur dans getAllRDV : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getByClient = async (req, res) => {
    try
    {
        const {idclient} = req.params
        const rdvs = await RDV.find({ client : { $regex : idclient, $options : 'i' } });
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getByClient : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getRdvByPersonnel = async (req, res) => {
    try
    {
        const {idpersonnel} = req.params
        const rdvs = await RDV.find({ personnel : { $regex : idpersonnel, $options : 'i' } });
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getRdvByPersonnel : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const getRdvByEtat = async (req, res) => {
    try
    {
        const {etat} = req.params
        const rdvs = await RDV.find({ etat : { $regex : etat, $options : 'i' } });
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur dans getRdvByEtat : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const createObject = async (req, res) => {
    try
    {
        const rdvs = await RDV.create(req.body);
        res.status(200).json(rdvs)
    }
    catch (error)
    {
        console.log('erreur insertion dans RDV : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const updateObject = async (req, res) => {
    try
    {
        const {id} = req.params
        const rdv = await RDV.findByIdAndUpdate(id, req.body)
        res.status(200).json(rdv)
    }
    catch (error)
    {
        console.log('erreur update dans RDV : ', error.message)
        res.status(500).json({message : error.message})
    }
}

const countAllRdv = async (req, res) => {
    try
    {
        const count = await RDV.countDocuments();
        res.status(200).json({count})
    }
    catch (error)
    {
        console.log("Erreur dans countAllRdv : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const countRdvPending = async (req, res) => {
    try
    {
        const count = await RDV.countDocuments({etat : 'En attente'});
        res.status(200).json({count})
    }
    catch (error)
    {
        console.log("Erreur dans countRdvPending : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const countRdvLoading = async (req, res) => {
    try
    {
        const count = await RDV.countDocuments({etat : 'En cours'});
        res.status(200).json({count})
    }
    catch (error)
    {
        console.log("Erreur dans countRdvLoading : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const countRdvAnnule = async (req, res) => {
    try
    {
        const count = await RDV.countDocuments({etat : 'Annulé'});
        res.status(200).json({count})
    }
    catch (error)
    {
        console.log("Erreur dans countRdvAnnule : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const countRdvDone = async (req, res) => {
    try
    {
        const count = await RDV.countDocuments({etat : 'Terminé'});
        res.status(200).json({count})
    }
    catch (error)
    {
        console.log("Erreur dans countRdvDone : ", error.message)
        res.status(500).json({message : error.message})
    }
}

const getStatistiqueRdvParMois = async (req, res) => {
    try {
        const statistiques = await RDV.aggregate([
            // Étape 1: Extraire le mois et l'année de la date
            {
                $project: {
                    mois: { $month: "$date" },
                    annee: { $year: "$date" },
                    etat: 1
                }
            },
            // Étape 2: Grouper par mois et année
            {
                $group: {
                    _id: { mois: "$mois", annee: "$annee" },
                    total: { $sum: 1 },
                    termines: {
                        $sum: {
                            $cond: [{ $eq: ["$etat", "Terminé"] }, 1, 0]
                        }
                    },
                    annules: {
                        $sum: {
                            $cond: [{ $eq: ["$etat", "Annulé"] }, 1, 0]
                        }
                    },
                    enAttente: {
                        $sum: {
                            $cond: [{ $ne: ["$etat", "Terminé"] }, { $cond: [{ $ne: ["$etat", "Annulé"] }, 1, 0] }, 0]
                        }
                    }
                }
            },
            // Étape 3: Reformater le résultat
            {
                $project: {
                    _id: 0,
                    mois: "$_id.mois",
                    annee: "$_id.annee",
                    total: 1,
                    termines: 1,
                    annules: 1,
                    enAttente: 1
                }
            },
            // Étape 4: Trier par année et mois
            {
                $sort: { annee: 1, mois: 1 }
            }
        ]);

        // Convertir les numéros de mois en noms de mois
        const moisNames = [
            "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
            "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
        ];

        const result = statistiques.map(stat => {
            return {
                ...stat,
                moisNom: moisNames[stat.mois - 1]
            };
        });

        return res.status(200).json(result);
    } catch (error) {
        console.log('Erreur dans getStatistiqueRdvParMois:', error.message);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllRDV,
    getByClient,
    createObject,
    updateObject,
    getRdvByPersonnel,
    getRdvByEtat,
    countAllRdv,
    countRdvPending,
    countRdvLoading,
    countRdvAnnule,
    countRdvDone,
    getStatistiqueRdvParMois
}