/*route express*/
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const commentCtrl = require('../controllers/comment');


router.post('/signup', auth, multer, commentCtrl.createComment);
router.post('/login', commentCtrl.login)
router.put('/:id', auth, multer, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);


module.exports = router;
