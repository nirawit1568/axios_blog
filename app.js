const http = require('http');
const path = require('path');
const express = require('express')
require('./config/mongoosse')

const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
