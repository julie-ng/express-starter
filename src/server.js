'use strict'
const app = require('./app')
const http = require('http')
// const server = http.createServer(app)
const port = process.env.PORT || 3000

const server = http.createServer(app)
server.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
