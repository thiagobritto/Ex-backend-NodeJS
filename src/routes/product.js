
const express = require('express')
const router = express.Router()

const productController = require('../controllers/productController')

router.post('/register', productController.register)
router.get('/list', productController.list)
router.get('/:id', productController.select)
router.put('/:id', productController.update)
router.delete('/:id', productController.remove)

module.exports = (app) => app.use('/product', router) 