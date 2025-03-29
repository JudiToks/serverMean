const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Users = require("../models/users")
const dotenv = require('dotenv');

dotenv.config();

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Pas de token, authentification refusée' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token invalide' });
    }
};

const register = async (req, res) => {
    try {
        const { email, password, name, telephone } = req.body;

        // verification sode efa misy
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Cet email est déjà utilisé' });
        }

        // Hasher le mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Créer un nouvel utilisateur
        const user = new Users({
            email,
            password: hashedPassword,
            name,
            telephone
        });

        await user.save();

        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur dans register', error: error.message });
    }
}

const testLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // verification si cela existe
        const user = await Users.findOne({ email });
        console.log("USER LOGIN : ", user)
        if (!user) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect satria tsis user' });
        }

        // verification mot de passe
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
        }

        // creation et signature du token anlah
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '4h' }
        );

        res.status(200).json({
            message: 'Connexion réussie',
            token,
            user: {
                id: user._id,
                email: user.email,
                name: user.name,
                telephone: user.telephone
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur dans testLogin', error: error.message });
    }
}

module.exports = {
    register,
    testLogin,
    authMiddleware
}