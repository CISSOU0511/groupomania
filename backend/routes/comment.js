/*route express*/
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
/*const multer = require('../middleware/multer-config');*/

const commentCtrl = require('../controllers/comment');

router.post('/', commentCtrl.createOneComment);
/*router.put('/:id', auth, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);*/
/*router.get('/:id', auth, commentCtrl.getOneComment);*/
router.get('/', commentCtrl.getAllComments);

module.exports = router;