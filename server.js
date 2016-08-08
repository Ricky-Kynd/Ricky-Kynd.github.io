var express = require('express')
var PORT = 3000
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, function () {
  console.log('Patiently waiting for aliens to make contact on port: ', PORT)
})
