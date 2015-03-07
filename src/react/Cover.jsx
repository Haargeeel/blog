var React = require('react/addons');

var Cover = React.createClass({

  getInitialState: function() {
    return {
      id: 0,
      magicTop: 200
    }
  },

  componentDidMount: function() {
    var cover = document.getElementsByClassName('cover')[0]
    var image = document.getElementsByClassName('image')[0]
    //document.getElementsByClassName('image')[0].style.top = this.state.magicTop + 'px'
    document.getElementsByClassName('image')[0].style.top = '0px'
    var top, imgTop
    var that = this
    window.addEventListener('scroll', function(e) {
      top = cover.getBoundingClientRect().top
      console.log('coverTop', top)
      imgTop = image.getBoundingClientRect().top
      if (top < that.state.magicTop && top > -that.state.magicTop)
        that.animate(top)
    })
  },

  animate: function(top) {
    var img = document.getElementsByClassName('image')[0]
    clearInterval(this.state.id)
    var d = 0
    var that = this
    var id = setInterval(function() {
      if (top === parseInt(img.style.top))
        clearInterval(id)
      else {
        if (Math.abs(top-parseInt(img.style.top)) > 10)
          d = Math.abs(top-parseInt(img.style.top)) * 0.5
        else if (Math.abs(top-parseInt(img.style.top)) > 5)
          d = 5
        else if (Math.abs(top-parseInt(img.style.top)) > 2)
          d = 2
        else if (Math.abs(top-parseInt(img.style.top)) > 0)
          d = 1
        if (top < parseInt(img.style.top))
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
        <img className='image' src={this.props.img}/>
        <div className='obstacle-top'></div>
        <div className='obstacle-bottom'></div>
      </div> 
    );
  }
});

module.exports = Cover;

