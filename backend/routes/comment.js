/*route express*/
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const commentCtrl = require('../controllers/comment');

router.post('/Create', auth, multer, commentCtrl.createOneComment);
/*router.put('/:id', auth, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);*/
router.get('/:id', auth, commentCtrl.getOneComment);
router.get('/articleComment/:id', auth, commentCtrl.getArticleComments);
/*router.get('/', auth, commentCtrl.findAll);*/
module.exports = router;