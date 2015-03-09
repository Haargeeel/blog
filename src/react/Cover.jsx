var React = require('react/addons');

var Cover = React.createClass({

  getInitialState: function() {
    return {
      initTop: 70,
      id: 0,
      magicTop: 200
    }
  },

  componentDidMount: function() {
    var cover = document.getElementsByClassName('cover')[0]
    var body = document.getElementsByTagName('body')[0]
    document.getElementsByClassName('image')[0].style.top = '0px'
    var top
    var that = this
    var initTop = cover.getBoundingClientRect().top
                - body.getBoundingClientRect().top
    this.setState({initTop: initTop})
    window.addEventListener('scroll', function(e) {
      top = cover.getBoundingClientRect().top
      if (top <= that.state.initTop && top >= that.state.initTop - 200)
        that.animate(top)
    })
  },

  animate: function(top) {
    var img = document.getElementsByClassName('image')[0]
    clearInterval(this.state.id)
    var d = 0
    var that = this
    var id = setInterval(function() {
      var imgTop = parseInt(img.style.top) + that.state.initTop
      if (top === imgTop)
        clearInterval(id)
      else {
        if (Math.abs(top-imgTop) > 10)
          d = Math.abs(top-imgTop) * 0.5
        else if (Math.abs(top-imgTop) > 5)
          d = 5
        else if (Math.abs(top-imgTop) > 2)
          d = 2
        else if (Math.abs(top-imgTop) > 0)
          d = 1
        if (top < imgTop)
          img.style.top = (parseInt(img.style.top) - d) + 'px'
        else
          img.style.top = (parseInt(img.style.top) + d) + 'px'
      }
    }, 1)
    that.setState({id: id})
  },

  render: function() {
    return (
      <div className='cover'>
        <div className='darker'></div>
        <img className='image' src={this.props.img}/>
        <div className='headline'>
          <h2>Welcome</h2>
          <h2>to my</h2>
          <h2>Blog!</h2>
        </div>
      </div> 
    );
  }
});

module.exports = Cover;

