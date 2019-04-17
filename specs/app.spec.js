// eslint-disable-next-line no-unused-vars
'use strict'
const app = require('../src/app')
const request = require('request')
const http = require('http')

const port = process.env.PORT || 3001

describe ('app', () => {
  let server

  beforeAll ((done) => {
    server = http.createServer(app).listen(port, done)
  })

  afterAll ((done) => {
    server.close(done)
  })

  describe ('GET /', () => {
    it (`returns 'Hello World!`, (done) => {
      const url = `http://localhost:${port}` + '/'
      request.get(url, (error, response, body) => {
        expect(response.statusCode).toBe(200)
        expect(response.body).toBe('Hello World!')
        done()
      })
    })
  })
})
