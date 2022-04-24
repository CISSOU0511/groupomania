//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const { sequelize } = require('../models/Comment');
const  Comment  = require('../models/Comment');
const  Articles  = require('../models/Articles');
const User = require('../models/User');

exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        order: sequelize.literal('(createdAt) DESC'),
        include: [{model: User}]
    })
    .then(() => res.status(200).json({ msg: 'Comment créé'}))
    .catch(error => res.status(400).json({ error }));
};
exports.getOneComment = function (req, res, next) {
    Comment.findAll({ where: { id: req.params.id }, include: [{ model: User }] })
        .then((commentaire) => res.status(200).json({commentaire}))
        .catch(error => res.status(400).json({ error }));
};
exports.createOneComment = function (req, res, next) {
    Comment.create({
        userId: req.body.userId,
        articleId: req.body.articleId,
        commentaire: req.body.commentaire        
    })
        .then(() => res.status(201).json({ msg: 'Commentaire créé !' }))
        .catch(error => res.status(400).json({ error }));
};
exports.getArticleComments = (req, res, next) => {
    Comment.findAll({ where: { articleId: req.params.id }, include: [{ model: User}], order: sequelize.literal('(createdAt) DESC') })
        .then((articleComments) => res.status(200).json({ articleComments }))
        .catch(error => res.status(404).json({ error }));
}