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
    //document.getElementsByClassName('image')[0].style.top = this.state.magicTop + 'px'
    document.getElementsByClassName('image')[0].style.top = '0px'
    var top, imgTop
    var that = this
    window.addEventListener('scroll', function(e) {
      top = cover.getBoundingClientRect().top
      if (top < that.state.magicTop && top > -that.state.magicTop)
        that.animate(top)
      //} else {
        //if (top > that.state.magicTop) {
          //document.getElementsByClassName('image')[0].style.top = that.state.magicTop + 'px'
          ////that.animate(magicTop)
        //} else if (top < -that.state.magicTop) {
          //document.getElementsByClassName('image')[0].style.top = (-that.state.magicTop) + 'px'
          ////that.animate(-magicTop)
        //}
      //}
    })
  },

  animate: function(top) {
    var img = document.getElementsByClassName('image')[0]
    console.log('img', parseInt(img.style.top))
    console.log('top', top)
    clearInterval(this.state.id)
    var d = 0
    var that = this
    var id = setInterval(function() {
      if (top < parseInt(img.style.top)) {
        if (Math.abs(top-parseInt(img.style.top)) > 10)
          d = Math.abs(top-parseInt(img.style.top)) * 0.5
        if (Math.abs(top-parseInt(img.style.top)) > 5)
          d = 5
        if (Math.abs(top-parseInt(img.style.top)) > 2)
          d = 2
        if (Math.abs(top-parseInt(img.style.top)) > 0)
          d = 1
        img.style.top = (parseInt(img.style.top) - d) + 'px'
      } else if (top > parseInt(img.style.top)) {
        if (Math.abs(top-parseInt(img.style.top)) > 10)
          d = Math.abs(top-parseInt(img.style.top)) * 0.5
        if (Math.abs(top-parseInt(img.style.top)) > 5)
          d = 5
        if (Math.abs(top-parseInt(img.style.top)) > 2)
          d = 2
        if (Math.abs(top-parseInt(img.style.top)) > 0)
          d = 1
        img.style.top = (parseInt(img.style.top) + d) + 'px'
      //if (top !== parseInt(img.style.top))
        //img.style.top = (parseInt(img.style.top) + (top - parseInt(img.style.top)) * 0.5) + 'px'
      } else
        clearInterval(id)
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

