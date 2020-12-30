//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');


const modelArticle = require('../models/Articles');

exports.createArticle = async (req, res, next) => {    
    const newArticle = await modelArticle.createArticle(req.body)
    if (newArticle.affectedRows > 0) {
        return res.status(201).send(' Article créé ! ')
    }
    else {
        res.status(500).send('error')
    }
};

exports.modifyArticle = async (req, res, next) => {
    console.log('article créé !', req.body)
    const article = {
        contenu: req.body.contenu,
        image: req.body.image,
        id: req.params.id
    }
    const updateArticle = await modelArticle.updateArticle(article)
    if (updateArticle.affectedRows > 0) {
        return res.status(201).send(' Article modifié ! ')
    }
    else {
        res.status(500).send('error')
    }
};
exports.deleteArticle = async (req, res, next) => {
    const article = {
        contenu: req.body.contenu,
        image: req.body.image,
        id: req.params.id
    }
    const deleteArticle = await modelArticle.deleteArticle(article)
    if (deleteArticle.affectedRows > 0) {
        return res.status(201).send(' Article supprimé ! ')
    }
    else {
        res.status(500).send('error')
    }
};
/*
exports.getOneArticle = (req, res, next) => {
    article.findOne({ _id: req.params.id })
        .then((article) => { res.status(200).json(article); })
        .catch((error) => { res.status(404).json({ error }); });

};

exports.getAllArticles = (req, res, next) => {
    articles.find()
        .then((articles) => { res.status(200).json(articles); })
        .catch((error) => { res.status(400).json({ error: error }); });
};
*/