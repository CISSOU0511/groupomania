/*route express*/
const express = require('express');
const router = express.Router();


const articlesCtrl = require('../controllers/articles');


router.post('/articles', articlesCtrl.createArticles);
//router.get('/articles', articlesCtrl.listArticles);
//router.delete('/articles', articlesCtrl.deleteArticles);


module.exports = router;
