const express = require ('express')
const router = express.Router();
const articleCtrl = require('../controllers/articles');

router.post('/', articleCtrl.createOneArticle);
/*router.put('/:id', articleCtrl.modifyOneArticle);
router.delete('/:id', articleCtrl.deleteOneArticle);
router.get('/:id', articleCtrl.getOneArticle);
router.get('/', articleCtrl.getAllArticles);*/


module.exports = router;