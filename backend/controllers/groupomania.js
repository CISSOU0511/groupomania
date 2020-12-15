
/*const Groupomania = require('../models/Groupomania');
const fs = require('fs');



exports.createGroupomania = (req, res, next) => {
    const groupomaniaObject = JSON.parse(req.body.groupomania);
    delete groupomaniaObject._id;
    const groupomania = new Groupomania({
        ...groupomaniaObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    groupomania.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};


exports.modifyGroupomania = (req, res, next) => {
    const groupomaniaObject = req.file ?
        {
            ...json.parse(req.body.groupomania),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    groupomania.updateOne({ _id: req.params.id }, { ...groupomaniaObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};



exports.deleteGroupomania = (req, res, next) => {
    groupomania.findOne({ _id: req.params.id })
        .then(groupomania => {
            const filename = groupomania.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                groupomania.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Deleted!' }))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({ error }));
};

exports.getOneGroupomania = (req, res, next) => {
    groupomania.findOne({ _id: req.params.id })
        .then((groupomania) => { res.status(200).json(groupomania); })
        .catch((error) => { res.status(404).json({ error }); });

};

exports.getAllGroupomania = (req, res, next) => {
    groupomania.find()
        .then((groupomania) => { res.status(200).json(groupomania); })
        .catch((error) => { res.status(400).json({ error: error }); });
};*/



