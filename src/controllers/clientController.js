const express = require('express')
const router = express.Router()

const client = require('../models/client')


router.post('/register', async function (req, res) {
    try {
        res.json(await client.insert(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/list', async function (req, res) {
    try {
        res.json(await client.all())
    } catch (error) {
        res.status(400).json(error)
    }
})


router.get('/:id', async function (req, res) {
    try {
        const { id } = req.params
        res.json(await client.find(id))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.put('/:id', async function (req, res) {
    try {
        const { id } = req.params
        res.json(await client.update(req.body, id))
    } catch (error) {
        res.status(400).json(error)
    }
})


router.delete('/:id', async function (req, res) {
    try {
        const { id } = req.params
        res.json(await client.delete(id))
    } catch (error) {
        res.status(400).json(error)
    }
})


module.exports = api => api.use('/client', router) 
