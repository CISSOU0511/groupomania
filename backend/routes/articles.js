/*route express*/
const express = require('express');
const router = express.Router();

const multer = require('..middeleware/multer-config');
const auth = require ('..middleware/auth');

const articlesCtrl = require('../controllers/articles');


router.post('/articles', auth, multer, articlesCtrl.createArticles);
router.get('/articles', auth, articlesCtrl.listArticles);
router.delete('/articles', auth, articlesCtrl.deleteArticles);


module.exports = router;
