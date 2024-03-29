const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                nom: req.body.nom,
                prenom: req.body.prenom,
                email: req.body.email,
                password: hash,
            })
                .then(() => res.status(201).json({ msg: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
}
exports.login = (req, res, next) => {
    User.findOne({
        where: { email: req.body.email },
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: "Utilisateur non trouvé" });
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        role: user.role,
                        id: user.id,
                        token: jwt.sign(
                            { id: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }))
        })
};
exports.getOneUser = (req, res, next) => {
    User.findAll({ where: { id: req.params.id } /*,include: [{ model: User }]*/ })
        .then((user) => res.status(200).json({ user }))
        .catch(error => res.status(404).json({ error }));
}

exports.deleteOneUser = (req, res, next) => {
    User.destroy({ where: { id: req.params.id } })
        .then(() => res.status(200).json({ message: 'Utilisateur supprimé' }))
        .catch(error => res.status(400).json({ error }));
}