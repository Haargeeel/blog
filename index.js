var express = require('express'),
    React = require('react'),
    path = require('path'),
    engines = require('consolidate')

var app = express()

var Header = require('./build/react/Header')

//app.set('views', __dirname + '/build')
app.use(express.static(__dirname + 'build'))
app.engine('.html', require('jade'))
//app.set('view engine', 'html')

app.get('/', function(req, res) {
  var out = {test: 'test'}
  var header = new Header(out)
  var body = React.renderToString(header)
  res.render('index.html', {
    markup: body
  })
})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port)
})
