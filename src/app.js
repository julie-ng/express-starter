import bodyParser from 'body-parser'
import express from 'express'

let web = express()
const port = process.env.PORT || 3000

web.use(bodyParser.json({ limit: '50mb' }))
web.use(bodyParser.urlencoded({ extended: false }))

web.get('/', function (req, res) {
  res.send('Hello World!')
})

web.listen(port, function () {
  console.log(`Listening on port ${port}`)
})

export { web as app }
