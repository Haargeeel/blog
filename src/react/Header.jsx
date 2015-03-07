var React = require('react/addons');

var Header = React.createClass({

  getInitialState: function() {
    return null;
  },

  componentDidMount: function() {

  },

  render: function() {
    return (
      <div className='header'>
        <div className='logo'>
          <span>Blog</span>
        </div>
        <div className='title'>
          <h1>Home</h1>
        </div>
        <div className='extra'>
          <div className='icon'>
            <div className='circle'>
            </div>
          </div>
          <div className='more'>
            <div className='lines'>
              <div className='line top'></div>
              <div className='line middle'></div>
              <div className='line bottom'></div>
            </div>
          </div>
        </div>
      </div> 
    );
  }
});

module.exports = Header;

