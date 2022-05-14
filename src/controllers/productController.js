const express = require('express')
const router = express.Router()

const product = require('../models/product')


router.post('/register', async function (req, res) {
    try {
        res.json(await product.insert(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/list', async function (req, res) {
    try {
        res.json(await product.all())
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/desc/:query/:limit', async (req, res) => {
    try{
        const { query, limit } = req.params
        const rows = await product.searchLimit(
            'description', query, limit
        )
        res.json(rows)
    } catch(error) {
        res.status(400).json(error)
    }
})


router.get('/:id', async function (req, res) {
    try {
        const { id } = req.params
        res.json(await product.find(id))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.put('/:id', async function (req, res) {
    try {
        const { id } = req.params
        res.json(await product.update(req.body, id))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.delete('/:id', async function (req, res) {
    try {
        let { id } = req.params
        res.json(await product.delete(id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = api => api.use('/product', router) 
