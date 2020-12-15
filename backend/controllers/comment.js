
const comment = require('../models/Comment');
const fs = require('fs');


exports.createComment = (req, res, next) => {
    const commentObject = JSON.parse(req.body.comment);
    delete commentObject._id;
    const comment = new Comment({
        ...commentObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    comment.save()
        .then(() => res.status(201).json({ message: 'commentaire enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.modifyComment = (req, res, next) => {
    const commentObject = req.file ?
        {
            ...json.parse(req.body.comment),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    comment.updateOne({ _id: req.params.id }, { ...commentObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Commentaire modifié !' }))
        .catch(error => res.status(400).json({ error }));
};



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

exports.getOneComment = (req, res, next) => {
    comment.findOne({ _id: req.params.id })
        .then((comment) => { res.status(200).json(comment); })
        .catch((error) => { res.status(404).json({ error }); });

};

exports.getAllComment = (req, res, next) => {
    comment.find()
        .then((comment) => { res.status(200).json(comment); })
        .catch((error) => { res.status(400).json({ error: error }); });
};



