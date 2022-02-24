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
exports.createOneComment = function (req, res, next) {
    Comment.create({
        commentaire: req.body.commentaire        
    })
        .then(() => res.status(200).json({ msg: 'Commentaire créé !' }))
        .catch(error => res.status(400).json({ error }));
};