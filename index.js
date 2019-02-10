// Import packages
const express = require('express')
const morgan = require('morgan')
// App
const app = express()
// Morgan
app.use(morgan('tiny'))
// First route
app.get('/password/:value', (req, res) => {
    res.json({ message: 'Hello world '+ req.params.value })
})
// Starting server
app.listen('1337')