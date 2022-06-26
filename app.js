'use strict'
const rateLimit = require('express-rate-limit')
const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
const limiter = rateLimit({
    windowMs: 1, // 15 minutes
    max: 6, // Limit each IP to 100 requests per `window` (here, per 1 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
// Apply the rate limiting middleware to API calls only
app.use('/', limiter)
app.get('/', (req, res) => {
    res.send('<h1>Submission Irwan Syahputra</h1>')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)