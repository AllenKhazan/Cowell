var React = require('react/addons');
var m = require('m');
var styles = {
  container: {
    height:30,
    width:60,
    borderRadius: 2,
    border: '2px solid gray'
  }
}
var Button = React.createClass({
  propTypes: {
    color: React.PropTypes.string.isRequired,
    lit: React.PropTypes.bool.isRequired,
    chooseColor: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return ({
              clicked:false
            });
  },
  resetStyle: function() {
    this.setState(this.getInitialState());
  },
  _onClick: function() {
    console.log("clicked", this.props.color);
    this.props.chooseColor(this.props.color);
    this.flashButton();
  },
  flashButton: function() {
    this.setState({clicked:true});
    setTimeout(this.resetStyle ,150);
  },
  render: function() {
    return( <div id={this.props.color} onClick={this._onClick} 
      style={m(styles.container, 
               this.props.color && {background:this.props.color},
               this.props.lit || this.state.clicked ? {opacity:0.3} : {opacity:1.0}
               )} ></div>)
}
});
module.exports = Button;
