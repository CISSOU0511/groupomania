const express = require('express');
const path = require('path');

const commentRoutes = require('./routes/comment');
const articleRoutes = require('./routes/articles');
const userRoutes = require('./routes/user');


const app = express();
const db = require('./models');
db.sequelize.sync();

app.use(express.json());
app.use(express.urlencoded({
    extended:false,
}));
app.use((_req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();

});
db.sequelize.authenticate()
    .then(() => console.log('Connexion établie'))
    .catch(error => console.error('impossible de se connecter', error));

app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/api/comment', commentRoutes);
app.use('/api', userRoutes);
app.use('/api/articles', articleRoutes);


module.exports = app;