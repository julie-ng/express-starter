// eslint-disable-next-line no-unused-vars
'use strict'

// eslint-disable-next-line no-unused-vars
const app = require('../src/app')
const request = require('request')

const port = process.env.PORT || 3000

describe ('app', () => {
  describe ('GET /', () => {
    it (`returns 'Hello World!`, (done) => {
      request.get(url('/'), (error, response, body) => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBe('Hello World!')
        done()
      })
    })
  })
})

function url (path = '') {
  return `http://localhost:${port}` + path
}
