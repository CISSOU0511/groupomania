//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const { sequelize } = require('../models/Articles');
const {Articles} = require('../models');
const {Users} = require('../models');
const fs = require('fs');

exports.getAllArticles = function (req, res, next) {
    Articles.findAll({
        order: sequelize.literal('(createdAt) DESC'),
        include: [{ model: Users }]
    })
        .then(() => res.status(200).json({ msg: 'Article créé' }))
        .catch(error => res.status(400).json({ error }));
};

exports.createOneArticle = function (req, res, next) {
    Articles.create({
        userId: req.body.userId,
        contenu: req.body.contenu,
        imageUrl: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : "",
    })
        .then(() => res.status(201).json({ msg: 'Article créé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneArticle = function (req, res, next) {
    Articles.findAll({ where: { userId: req.params.id }, include: [{ model: Users }] })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteOneArticle = (req, res, next) => {
    Articles.findAll({ where: { articleId: req.params.id } })
        .then(articles => {
            const filename = articles[0].imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Articles.destroy({ where: { articleId: req.params.id } })
                    .then(() => res.status(200).json({ message: "Article supprimé ! " }))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }))
};
/*exports.modifyOneArticle = (req, res, next) => {
    let ArticleObject;
    console.log(req.params.id)
    if (req.file) {
        ArticleObject = {
            userId: req.body.userId,
            contenu: req.body.contenu,
            imageUrl: req.body.imageUrl
        } 
         Article.findAll({ where: { articleId: req.params.id } })
            .then(article => {
                const filename = article[0].imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => {
                    Article.update({
                        ...ArticleObject
                    },
                        {
                            where: {
                                articleId: req.params.id
                            }
                        })
                        .then(() => res.status(200).json({ message: "Votre article a été modifié !" }))
                        .catch(error => res.status(400).json({ message: "Votre article n'a pas pu être modifié" + error }));
                })
            })
            .catch(error => console.log("Article introuvable", error))
    } else {
        Article.update({
            contenu: req.body.contenu,
            imageUrl: req.body.imageUrl,
        },
            {
                where: {
                    articleId: req.params.id
                }
            })
            .then(() => res.status(200).json({ message: "Votre article a été modifié !" }))
            .catch(error => res.status(400).json({ message: "Votre article n'a pas pu être modifié" + error }));
    }
};*/