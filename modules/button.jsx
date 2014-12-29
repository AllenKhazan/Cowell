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
    chooseColor: React.PropTypes.func.isRequired
  },
  getInitialState: function() {
    return ({
      style: { background: this.props.color,
               opacity: 1.0,
               height: '30px',
               width: '60px',
               border: '2px solid black' }
            }
           );
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
    var oldstyle = this.state.style;
    oldstyle.opacity=0.7;
    this.setState({style:oldstyle});
    setTimeout(this.resetStyle ,150);
  },
  render: function() {
    return( <div id={this.props.color} onClick={this._onClick} style={m(styles.container, this.props.color && {background:this.props.color})} ></div>)
  }
});
module.exports = Button;
