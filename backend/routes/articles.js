const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config');

router.post('/Create', auth, multer, articleCtrl.createOneArticle);
router.put('/:id', auth, multer, articleCtrl.modifyOneArticle);
router.delete('/article/:id', auth, multer, articleCtrl.deleteOneArticle);
router.get('/All', auth, articleCtrl.getAllArticles);
router.get('/:id', auth, articleCtrl.getOneArticle);
router.get('/user/:id', auth, articleCtrl.getUserArticle);

module.exports = router;