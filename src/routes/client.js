
const express = require('express')
const router = express.Router()

const clientController = require('../controllers/clientController')

router.get('/list', clientController.list)
router.post('/register', clientController.register)

router.get('/:id', clientController.select)
router.put('/:id', clientController.update)
router.delete('/:id', clientController.remove)


module.exports = (app) => app.use('/client', router) 