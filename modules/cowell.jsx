var React = require('react');
var Button = React.createClass({
  propTypes: {
    color: React.PropTypes.string.isRequired
  },
  _onClick: function(t) {
    console.log("clicked", this.props.color);
  },
  render: function() {
    var style = { background: this.props.color,
                  height: '100px', 
                  width: '100px',
                  border: '2px solid black' };
    return( <div onClick={this._onClick} style={style} ></div>)
  }
});
var Cowell = React.createClass({
  render: function() {
    return (
      <div>
        <Button color="red"/>
        <Button color="green"/>
        <Button color="blue"/>
        <Button color="yellow"/>
      </div>
    );
  }
});

module.exports = Cowell;
