/*route express*/
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const commentCtrl = require('../controllers/comment');

router.post('/', auth, commentCtrl.createComment);
/*router.put('/:id', auth, commentCtrl.modifyComment);
router.delete('/:id', auth, commentCtrl.deleteComment);
router.get('/user/:id', auth, commentCtrl.findOne);
router.get('/', auth, commentCtrl.findAll);*/

module.exports = router;
