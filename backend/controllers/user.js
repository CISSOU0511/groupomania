const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                NOM: req.body.nom,
                PRENOM: req.body.prenom,
                EMAIL: req.body.email,
                PASSWORD: hash
            })
                .then(() => res.status(201).json({ msg: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}
exports.login = (req, res, next) => {
    User.findOne({where: {email: req.body.email}})
        .then(user => {
            if (user === undefined) {
                return res.status(404).json({ error: "Utilisateur non trouvé" });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        userId: user.userId,
                        role: user.role,
                        token: jwt.sign(
                            { userId: user.userId, role: user.role },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(400).json({ error }));
}
exports.getOneUser = (req, res, next) => {
    User.findAll({ where: { userId: req.params.id } })
        .then(user => { res.status(200).json(user) })
        .catch(error => res.status(404).json({ error }));
}
exports.deleteOneUser = (req, res, next) => {
    User.destroy({ where: { userId: req.params.id } })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé' }))
        .catch(error => res.status(400).json({ error }));
}
exports.authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decodedToken.userId;
    User.findAll({ where: { userId: userId } })
        .then(user => {
            if (user[0] == undefined) {
                res.status(401).json({ message: "Vous ne pouvez pas accéder à cette page" })
            } else {
                res.status(200).json({ message: "Ok" })
            }
        })
        .catch(error => res.status(400).json({ error }))
}