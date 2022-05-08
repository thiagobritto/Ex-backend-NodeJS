
const express = require('express')
const router = express.Router()

const clientController = require('../controllers/clientController')

router.post('/register', clientController.register)

module.exports = (app) => app.use('/client', router) 