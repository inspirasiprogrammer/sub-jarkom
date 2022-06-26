'use strict'
const rateLimit = require('express-rate-limit')
const express = require('express')

const PORT = 8000
const HOST = '127.0.0.1'

const app = express()
// Create the rate limit rule
const RequestLimiter = rateLimit({
    windowMs: 10 * 1000, // 10 Second *1000=mili
    max: 1, // limit each IP to 1 requests per windowMs
    handler: function (req, res, /*next*/) {
        return res.status(429).json({
            error: 'You sent too many requests. Please wait a while then try again'
        })
    }
})

// Use the limit rule as an application middleware
app.use(RequestLimiter)

app.get('/', (req, res) => {
    res.send('<h1>Submission Irwan Syahputra</h1>')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)