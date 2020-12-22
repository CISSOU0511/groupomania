/*route express*/
const express = require('express');
const router = express.Router();

const multer = require('..middeleware/multer-config');
const auth = require ('..middleware/auth');

const commentCtrl = require('../controllers/comment');


router.post('/:messageId/comment/new',auth, multer, commentCtrl.comment);
router.get('/:messageId/comment',auth, multer, commentCtrl.listComment);


module.exports = router;
