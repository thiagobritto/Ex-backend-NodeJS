
const express = require('express')
const api = express.Router()
const authMiddlewares = require('../middlewares/authMiddlewares')

api.use(authMiddlewares)

require('../controllers/clientController')(api)
require('../controllers/productController')(api)

module.exports = app => app.use('/api', api) 
