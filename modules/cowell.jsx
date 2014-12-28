var React = require('react');
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
    return( <div onClick={this._onClick} style={this.state.style} ></div>)
  }
});
var Cowell = React.createClass({
  getDefaultProps: function() {
    return(
      {
        colors: ['cyan','salmon','violet','greenyellow']
      }
    );
  },
  getInitialState: function() {
    return(
      {
        sequence: [],
        playerInput: [],
        currentIndex: 0
      }
    );
  },
  chooseColor: function(c) {
    if (c == this.state.sequence[this.state.currentIndex]) {
      if (this.state.sequence.length == this.state.currentIndex + 1) {
        console.log("good job");
        var newColor = this.choice(this.props.colors);
        this.setState({playerInput: [],
                      currentIndex: 0,
                      sequence: this.state.sequence.concat([newColor])
                      }
                     );
      } else {
        console.log("keep going");
        this.setState({playerInput: this.state.playerInput.concat([c]),
                       currentIndex: this.state.currentIndex + 1});
      }
    } else {
      console.log("you messed up.");
      this.setState(this.getInitialState());
    }
  },
  choice: function(x) {
    return (x[Math.floor(Math.random() * x.length)]);
  },
  newGame: function() {
    this.setState({
      sequence: [this.choice(this.props.colors)],
      playerInput: [],
      currentIndex: 0
    });
  },
  render: function() {
    var buttons = this.props.colors.map( function(c) { return (
      <Button chooseColor={this.chooseColor} key={c} color={c}/>
    ); }, this);
    return (
      <div>
        <h1 onClick={this.newGame}>New Game</h1>
        <h2>Sequence {this.state.sequence}</h2>
        <h2>Player Input {this.state.playerInput}</h2>
        <h1>Score: {this.state.sequence.length -1}</h1>
        {buttons}
      </div>
    );
  }
});

module.exports = Cowell;
