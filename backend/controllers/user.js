/*package de chiffrement */
const bcrypt = require('bcrypt');
/*token d'authentification*/
const jwt = require('jsonwebtoken');
const mysql = require('mysql2');
const User = require('../../../groupomania/backend/models/User');


const { createUser } = require('../models/User');

exports.signup = (req, res, next) => {
    console.log('test', req.body)
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const newUser = createUser()
        })
        .catch(error => res.status(500).json({ error }))
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur non trouvé !' });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};