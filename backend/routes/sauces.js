const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const saucesCtrl = require('../controllers/sauces');
// les requêtes
router.get('/',saucesCtrl.getAllSauce);
router.post('/', multer, saucesCtrl.createSauce);
router.get('/:id', saucesCtrl.getOneSauce);
router.put('/:id', multer, saucesCtrl.modifySauce);
router.delete('/:id', saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.likeSauce);



module.exports = router;