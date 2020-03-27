const express = require('express')
const favicon = require('express-favicon')
var http = require('http')
var enforce = require('express-sslify')
require('dotenv').config()

const path = require('path')
const port = process.env.PORT || 8080
const app = express()
const env = process.env.NODE_ENV || 'production'

try {
  if (env === 'production') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }))
  }
} catch (error) {
  console.log(error)
}

app.use(favicon(path.join(__dirname, '/build/favicon.ico')))
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

http.createServer(app).listen(port, () => {
  console.log(`serving files on port ${port} and the NODE_ENV is ${env}`)
})
