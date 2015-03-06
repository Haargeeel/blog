var React = require('react')

var Landing = React.createFactory(require('../react/Landing.jsx'))

module.exports.render = function() {
  var $container = document.querySelector('#landing')
  if (!$container) return

  React.render(new Landing({img: '../img/cover.jpg'}), $container)
}
