/*package de chiffrement */
const bcrypt = require('bcrypt');
/*token d'authentification*/
const jwt = require('jsonwebtoken');

const { createUser, findOne, } = require('../models/User');


exports.signup = async (req, res, next) => {
    const hash = await bcrypt.hash(req.body.password, 10)
    const newUser = await createUser(req.body, hash)
    if (newUser.affectedRows > 0) {
        return res.status(201).send('userCreated');
    }
    else {
        return res.status(500).send('userNotCreated');
    }
};

exports.login = async (req, res, next) => {
    const user = await findOne(req.body.email)
    console.log(user)
    if (!user) {
        return res.status(400).json({ error: 'Utilisateur non trouvé !' });
    }
    res.status(200).json({
        userId: user._id,
        token: jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
        )        
    })
};
