var React = require('react');
var styles = require('./App.css');

var App = React.createClass({
  propTypes: {
    state: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <h1 className={styles.headline}>Demo</h1>
        <p>{this.props.state.num}</p>
        <button className={styles.increment} onClick={() => this.props.dispatch({type: "INC"})}>
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
