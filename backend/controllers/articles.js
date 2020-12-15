
const articles = require('../models/Articles');
const fs = require('fs');


exports.createArticles = (req, res, next) => {
    const articlesObject = JSON.parse(req.body.articles);
    delete articlesObject._id;
    const articles = new Articles({
        ...articlesObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    articles.save()
        .then(() => res.status(201).json({ message: 'Article enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.modifyArticles = (req, res, next) => {
    const articlesObject = req.file ?
        {
            ...json.parse(req.body.articles),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    articles.updateOne({ _id: req.params.id }, { ...articlesObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Article modifié !' }))
        .catch(error => res.status(400).json({ error }));
};



exports.deleteArticles = (req, res, next) => {
    articles.findOne({ _id: req.params.id })
        .then(articles => {
            const filename = articles.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                articles.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Deleted!' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getOneArticles = (req, res, next) => {
    articles.findOne({ _id: req.params.id })
        .then((articles) => { res.status(200).json(articles); })
        .catch((error) => { res.status(404).json({ error }); });

};

exports.getAllArticles = (req, res, next) => {
    articles.find()
        .then((articles) => { res.status(200).json(articles); })
        .catch((error) => { res.status(400).json({ error: error }); });
};



