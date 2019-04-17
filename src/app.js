'use strict'
const bodyParser = require('body-parser')
const express = require('express')

let app = express()
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

module.exports = app