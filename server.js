const express = require('express')
const app = express()


app.use('/',express.static(__dirname + '/dist'));
app.use('/home',express.static(__dirname + '/dist'));
app.use('/**',express.static(__dirname + '/dist'));


app.listen(9000, function () {
  console.log('Example app listening on port 3000!')
})
