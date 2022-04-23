//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const { sequelize } = require('../models/Articles');
const Articles = require('../models/Articles');
const User = require('../models/User');
const fs = require('fs');

exports.getAllArticles = function (req, res, next) {
    Articles.findAll({
        order: sequelize.literal('(createdAt) DESC'),
        /*include: [{ model: User }]*/
    })
        .then((articles) => res.status(200).json({ articles }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneArticle = function (req, res, next) {
    Articles.findAll({ where: { id: req.params.id }, include: [{ model: User }] })
        .then(users => res.status(200).json(users))
        .catch(error => res.status(400).json({ error }));
};

exports.createOneArticle = function (req, res, next) {
    Articles.create({
        userId: req.body.userId,
        contenu: req.body.contenu,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    })
        .then(() => res.status(201).json({ msg: 'Article créé !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.deleteOneArticle = (req, res, next) => {
    Articles.findAll({ where: { id: req.params.id } })
        .then(articles => {
            const filename = articles[0].imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Articles.destroy({ where: { id: req.params.id } })
                    .then(() => res.status(200).json({ message: "Article supprimé ! " }))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }))
};
exports.modifyOneArticle = (req, res, next) => {
    let ArticleObject;
    if (req.file) {
        ArticleObject = {
            contenu: req.body.contenu,
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        }
        Articles.findAll({ where: { id: req.params.id } })
            .then(article => {
                const filename = article[0].imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Articles.update({
                        ...ArticleObject
                    },
                        {
                            where: {
                                id: req.params.id
                            }
                        })
                        .then(() => res.status(200).json({ message: "Votre article a été modifié !" }))
                        .catch(error => res.status(400).json({ message: "Votre article n'a pas pu être modifié" + error }));
                })
            })
            .catch(error => console.log("Article introuvable", error))
    } else {
        Articles.update({
            contenu: req.body.contenu,
            imageUrl: req.body.imageUrl,
        },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(() => res.status(200).json({ message: "Votre article a été modifié !" }))
            .catch(error => res.status(400).json({ message: "Votre article n'a pas pu être modifié" + error }));
    }
};
exports.getUserArticle = (req, res, next) => {
    Articles.findAll({ where: { userId: req.params.id }, order: sequelize.literal('(createdAt) DESC') })
        .then((userArticles) => res.status(200).json({ userArticles }))
        .catch(error => res.status(404).json({ error }));
}