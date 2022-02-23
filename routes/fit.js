const express = require('express');
const router = express.Router();
const resto = require('../controllers/fit');
const auth = require('../middleware/auth');
const fit = require('../models/fit');

router.get('/', fit.getAllFit);
router.get('/:id', fit.getOneFit);
router.post('/', fit.newfit);
router.put('/:id', fit.updateFit);
router.delete('/:id', fit.deleteFit);

module.exports = router;