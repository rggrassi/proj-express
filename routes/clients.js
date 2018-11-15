const express = require('express')
const router = express.Router()
const clientesController = require('../controllers/clients')

router.get('/list', clientesController.list)
router.get('/new', clientesController.create)

module.exports = router