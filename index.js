var express = require('express'),
    React = require('react'),
    path = require('path'),
    engines = require('consolidate')

var app = express()

var Header = React.createFactory(require('./build/react/Header'))
var Cover = React.createFactory(require('./build/react/Cover'))
var Landing = React.createFactory(require('./build/react/Landing'))

app.use(express.static(__dirname + '/build'))
app.set('views', __dirname + '/build')
app.set('view engine', 'jade')

app.get('/', function(req, res) {
  var out = {img: '../img/cover.jpg'}
  var body = React.renderToStaticMarkup(new Landing(out))
  res.render('index', {
    body: body
  })
})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port)
})
