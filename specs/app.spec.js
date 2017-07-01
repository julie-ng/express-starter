// eslint-disable-next-line no-unused-vars
import { app } from '~/app'
import request from 'request'

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
