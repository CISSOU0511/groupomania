const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const modelComment = require('../models/Comment');

exports.createComment = async (req, res, next) => {
    const newComment = await modelComment.createComment(req.body)
    if (newComment.affectedRows > 0) {
        return res.status(201).send(' Commentaire créé ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.modifyComment = async (req, res, next) => {
    console.log('Commentaire modifié !', req.body)
    const comment = {
        commentaire: req.body.commentaire,
        id: req.params.id
    }
    const updateComment = await modelComment.updateComment(comment)
    if (updateComment.affectedRows > 0) {
        return res.status(201).send(' Commentaire modifié ! ')
    }
    else {
        res.status(500).send('error')
    }
};
/*
exports.deleteComment = (req, res, next) => {
    comment.findOne({ _id: req.params.id })
        .then(comment => {
            const filename = comment.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                comment.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Deleted!' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

/*exports.getOneComment = (req, res, next) => {
    comment.findOne({ _id: req.params.id })
        .then((comment) => { res.status(200).json(comment); })
        .catch((error) => { res.status(404).json({ error }); });

};*/

/*exports.getAllComment = (req, res, next) => {
    comment.find()
        .then((comment) => { res.status(200).json(comment); })
        .catch((error) => { res.status(400).json({ error: error }); });
};*/



