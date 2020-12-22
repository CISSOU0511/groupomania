/*package de chiffrement */
const bcrypt = require('bcrypt');
/*token d'authentification*/
const jwt = require('jsonwebtoken');
const User = require('../../../groupomania/backend/models/User.js');



const { createUser, findOne } = require('../models/User');


exports.signup = async (req, res, next) => {
    console.log('ok', req.body)
    const hash = await bcrypt.hash(req.body.password, 10)
    
    const newUser = await createUser(req.body, hash)
    if (newUser.affectedRows >0) {
       return res.status(201).send(' utilisateur créé ! ')
    }
    else {
        res.status(500).send('error')
    }       
};

exports.login = async (req, res, next) => {
    console.log('ok', req.body)
    const user = await findOne(req.body.email)
    console.log(user)

    /*User.findOne({ email: req.body.email })
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
        .catch(error => res.status(500).json({ error }));*/
};