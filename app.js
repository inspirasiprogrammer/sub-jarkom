'use strict'
const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Submission Irwan Syahputra</h1>')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)