const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth');
const articleCtrl = require('../controllers/articles');
const multer = require('../middleware/multer-config')

router.post('/', articleCtrl.createOneArticle);
router.put('/user/:id', articleCtrl.modifyOneArticle);
router.delete('/:id',auth, articleCtrl.deleteOneArticle);
/*router.get('/:id', articleCtrl.getOneArticle);
router.get('/', articleCtrl.getAllArticles);*/

module.exports = router;