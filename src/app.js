'use strict'
const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')

let app = express()
app.use(helmet())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req, res, next) => {
  res.status(404).send('Oops - page not found.')
})

module.exports = app