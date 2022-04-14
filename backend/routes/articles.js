const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, articleCtrl.createOneArticle);
/*router.put('/:id', articleCtrl.modifyOneArticle);*/
router.delete('/:id',auth, multer, articleCtrl.deleteOneArticle);
/*router.get('/:id', articleCtrl.getOneArticle);
router.get('/', articleCtrl.getAllArticles);*/

module.exports = router;