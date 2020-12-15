/*route express*/
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');
const mysql = require('mysql2');


router.post('/signup', auth, multer, userCtrl.createUser);
//router.post('/login', auth, multer, userCtrl.login);
router.put('/:id', auth, multer, userCtrl.modifyUser);
router.delete('/:id', auth, userCtrl.deleteUser);
/*router.get('/:id', auth, userCtrl.getOneUser);
router.get('/', auth, userCtrl.getAllUser);
router.post('/:id/like', auth, userCtrl.manageLike)*/

module.exports = router;