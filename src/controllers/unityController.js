const express = require('express')
const router = express.Router()

const unity = require('../models/unity')

router.get('/all', async (req, res) => {
  try {
    const r = await unity.all()
    res.json(r)
  } catch (error) {
    res.status(400).json(error)
  }
})



module.exports = api => api.use('/unity', router) 
