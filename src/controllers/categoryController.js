const express = require('express')
const router = express.Router()

const category = require('../models/category')

router.get('/all', async (req, res) => {
  try {
    const r = await category.all()
    res.json(r)
  } catch (error) {
    res.status(400).json(error)
  }
})



module.exports = api => api.use('/category', router) 
