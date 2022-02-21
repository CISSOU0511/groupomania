const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config')

router.post('/', articleCtrl.createOneArticle);
router.put('/users/:id',articleCtrl.modifyOneArticle);
router.delete('/:id', articleCtrl.deleteOneArticle);
router.get('/:id', articleCtrl.getOneArticle);
router.get('/', articleCtrl.getAllArticles)

module.exports = router;