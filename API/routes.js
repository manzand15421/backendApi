'use strict';

const express = require('express');
const router = express.Router();
let jsonku = require('./controler');

// Definisikan semua rute
router.get('/', jsonku.index);

router.get('/tampil', jsonku.tampilsemuadata);

router.post('/addData', jsonku.addData);

router.get('/tampilkandata/:id', jsonku.tampilkandata);

router.put('/updatedata/:id', jsonku.updatedata);

router.delete('/delete/:id', jsonku.deleteData);

module.exports = router;
