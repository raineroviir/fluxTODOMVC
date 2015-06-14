var React = require('react');
var TodoActions = require('../actions/TodoActions');

function _randomButton() {
    console.log('random button fn');
    TodoActions.randomButton();
};

var TodoRandomButton = React.createClass({
  render: function() {
    return (
        <button onClick={this._randomButton} >
        </button>
      )
  }
});

module.exports = TodoRandomButton;
