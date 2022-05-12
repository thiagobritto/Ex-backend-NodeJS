const express = require('express')
const router = express.Router()

const client = require('../models/client')


router.post('/register', async (req, res) => {
    try {
        res.json(await client.insert(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/list', async (req, res) => {
    try {
        res.json(await client.all())
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/name/:query/:limit', async (req, res) => {
    try {
        const { query, limit } = req.params
        const rows = await client.searchLimit(
            'first_name', query, limit
        )
        res.json(rows)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        res.json(await client.find(id))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        res.json(await client.update(req.body, id))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        res.json(await client.delete(id))
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = api => api.use('/client', router) 
