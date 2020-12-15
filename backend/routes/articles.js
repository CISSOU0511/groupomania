/*route express*/
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const articlesCtrl = require('../controllers/articles');


router.post('/signup', auth, multer, articlesCtrl.createArticles);
router.post('/login', articlesCtrl.login)
router.put('/:id', auth, multer, articlesCtrl.modifyArticles);
router.delete('/:id', auth, articlesCtrl.deleteArticles);


module.exports = router;
