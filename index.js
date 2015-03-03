var express = require('express'),
    React = require('react'),
    path = require('path'),
    engines = require('consolidate')

var app = express()

var Header = React.createFactory(require('./build/react/Header'))

app.set('views', __dirname + '/build')
//app.engine('.html', require('jade').__express)
//app.set('view engine', 'html')
app.set('view engine', 'jade')

app.get('/', function(req, res) {
  var out = {test: 'test'}
  var body = React.renderToStaticMarkup(new Header(out))
  //var body = React.renderToString(new Header(out))
  res.render('index', {
    body: body
  })
})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port)
})
