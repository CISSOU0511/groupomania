/*route express*/
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const commentCtrl = require('../controllers/comment');

router.post('/', commentCtrl.createComment);
router.put('/:id', commentCtrl.modifyComment);
/*router.delete('/:id', commentCtrl.deleteComment);
router.get('/:id', commentCtrl.getOneComment);*/
//router.get('/', commentCtrl.getAllComment);

module.exports = router;
