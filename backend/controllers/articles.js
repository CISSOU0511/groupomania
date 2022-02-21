//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const { sequelize } = require('../models/Articles');
const Article = require('../models/Articles');
const User = require('../models/User');

exports.getAllArticles = function (req, res, next) {
    Article.findAll({
        order: sequelize.literal('(createdAt) DESC'),
        include: [{ model: User }]
    })
        .then(() => res.status(200).json({ msg: 'Article créé' }))
        .catch(error => res.status(400).json({ error }));
};

exports.createOneArticle = function (req, res, next) {
    Article.create({
        createId: req.body.createId,
        contenu: req.body.contenu,
        imageUrl: req.body.imageUrl
    })
        .then(() => res.status(201).json({ msg: 'Article créé !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneArticle = function (req, res, next) {
    Article.findAll({ where: { postId: req.params.id }, include: [{ model: User }] })
        .then(post => res.status(200).json(post))
        .catch(error => res.status(400).json({ error }));
};

exports.modifyOneArticle = (req, res, next) => {
    let ArticleObject;
    console.log(req.params.id)
    if (req.file) {
        ArticleObject = {
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
            contenu: req.body.contenu
        },
            {
                where: {
                    articleId: req.params.id
                }
            })
            .then(() => res.status(200).json({ message: "Votre article a été modifié !" }))
            .catch(error => res.status(400).json({ message: "Votre article n'a pas pu être modifié" + error }));
    }
};
exports.deleteOneArticle = (req, res, next) => {
    Article.findAll({ where: { articleId: req.params.id } })
        .then(article => {
            const filename = article[0].imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Article.destroy({ where: { articleId: req.params.id } })
                    .then(() => res.status(200).json({ message: "Article supprimé ! " }))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }))
};

