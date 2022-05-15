const express = require('express')
const router = express.Router()

const product = require('../models/product')


router.post('/register', async (req, res) => {
	try {
		res.json(await product.insert(req.body))
	} catch (error) {
		res.status(400).json(error)
	}
})


router.get('/search/:query/:limit', async (req, res) => {
	try {
		const { query, limit } = req.params
		const rows = await product.searchLimit(
			'description', query, limit
		)
		res.json(rows)
	} catch (error) {
		res.status(400).json(error)
	}
})


module.exports = api => api.use('/product', router) 
