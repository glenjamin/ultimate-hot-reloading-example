var React = require('react');
var { connect } = require('react-redux');

var styles = require('./App.css');

var App = React.createClass({
  propTypes: {
    count: React.PropTypes.object,
    dispatch: React.PropTypes.func
  },
  render() {
    var { count, dispatch } = this.props;
    return (
      <div>
        <h1>Demo</h1>
        <p>{count.num}</p>
        <button
          className={styles.increment}
          onClick={() => dispatch({type: "INC"})}
        >
          +1
        </button>
        <p>
          <a href="/whoami">Server-only route</a>
        </p>
      </div>
    );
  },
});

function mapStateToProps(state) {
  return {
    count: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: (action) => dispatch(action)
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
