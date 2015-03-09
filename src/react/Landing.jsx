var React = require('react/addons')
var Cover = require('./Cover.jsx'),
    Header = require('./Header.jsx'),
    Entry = require('./Entry.jsx')

var Landing = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {

  },

  render: function() {
    return (
      <div>
        <Header />
        <Cover id='cover' img={this.props.img} />
        <Entry />
      </div> 
    );
  }
});

module.exports = Landing;
