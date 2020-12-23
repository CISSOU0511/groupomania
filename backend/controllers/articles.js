const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');


const { createArticles } = require('../models/Articles');

exports.createArticles = async (req, res, next) => {
    const hash = await bcrypt.hash(req.body.password, 10)
    const newArticles = await createArticles(req.body, hash) 
    if (newArticles.affectedRows > 0) {
        return res.status(201).send(' commentaire créé ! ')
    }
    else {
        res.status(500).send('error')
    }  
    /*res.status(200).json({
        userId: user._id,
        token: jwt.sign(
            { userId: user._id },
            'RANDOM_TOKEN_SECRET',
            { expiresIn: '24h' }
        )
    })*/
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



