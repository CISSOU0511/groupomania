const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');


const { createComment } = require ('../models/Comment');

exports.createComment = async (req, res, next) => { 
    console.log('commentaire créé !', req.body)   
    const hash = await bcrypt.hash(req.body.password, 10)
    const newComment = await createComment(req.body, hash) 
    if (newComment.affectedRows > 0) {
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

/*exports.getOneComment = (req, res, next) => {
    comment.findOne({ _id: req.params.id })
        .then((comment) => { res.status(200).json(comment); })
        .catch((error) => { res.status(404).json({ error }); });

};*/

exports.getAllComment = (req, res, next) => {
    comment.find()
        .then((comment) => { res.status(200).json(comment); })
        .catch((error) => { res.status(400).json({ error: error }); });
};



