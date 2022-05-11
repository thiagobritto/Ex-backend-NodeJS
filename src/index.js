require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

require('./routes/api')(app)

app.listen(port, ()=>{
    console.log('runing');
})