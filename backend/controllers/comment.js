//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');

/*const { sequelize } = require('../models/Articles');*/
const User = require('../models/User');
const { sequelize } = require('../models/Comment');
const Comment = require('../models/Comment');

exports.createComment = function (req, res, next) {
    Comment.create({
        /*postId: req.params.id,
        articleId: req.body.userId,*/
        commentaire: req.body.commentaire        
    })
        .then(() => res.status(201).json({ msg: 'Commentaire créé !' }))
        .catch(error => res.status(400).json({ error }));
};