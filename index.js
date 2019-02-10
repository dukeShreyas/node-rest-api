var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})
app.get('/password/:value', (req, res) => {
    console.log('**** Password characters: '+ req.params.value + '****')
    res.send('Password characters: '+ req.params.value)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})