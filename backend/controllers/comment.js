//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

const { sequelize } = require('../models/Articles');

const Comment = require('../models/Comment');
const User = require('../models/User');

exports.getAllComments = (req, res, next) => {
    Comment.findAll({
        order: sequelize.literal('(createdAt) DESC'),
        include: [{model: User}]
    })
    .then(() => res.status(200).json({ msg: 'Comment créé'}))
    .catch(error => res.status(400).json({ error }));
};
exports.createComment = function (req, res, next) {
    Comment.create({
        postId: req.params.id,
        articleId: req.body.userId,
        commentaire: req.body.commentaire        
    })
        .then(() => res.status(201).json({ msg: 'Commentaire créé !' }))
        .catch(error => res.status(400).json({ error }));
};