require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


require('./routes/client')(app)


app.listen(port, ()=>{
    console.log('runing');
})