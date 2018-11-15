const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.home)
router.get('/dashboard', indexController.dashboard)
router.get('/par/:num', indexController.par)

module.exports = router