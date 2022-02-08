const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
const { sequelize } = require('../models/User');
const User = require('../models/User');

exports.signup = function (req, res, next) {
    const hash = bcrypt.hashSync(req.body.password, 10);
    User.create({
        NOM:req.body.nom,
        PRENOM: req.body.prenom,
        EMAIL: req.body.email,
        PASSWORD: hash
    })
        .then(() => res.status(201).json({ msg: 'User créé !' }))
        .catch(error => res.status(400).json({ error }));
};

/*exports.findOne = function (email) {
    return new Promise((resolve,reject ) => {        
        mysql.query('SELECT * FROM `utilisateurs` WHERE email= ? ', [email], function (error, result, fields) {
            if (error) return reject(error)
            resolve(result)
        })
    })
};*/