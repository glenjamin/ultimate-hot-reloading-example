var React = require('react');

var App = React.createClass({
  propTypes: {
    state: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <h1>Demo</h1>
        <p>{this.props.state.num}</p>
        <button onClick={() => this.props.dispatch({type: "INC"})}>
          +1
        </button>
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  },
});

module.exports = App;
