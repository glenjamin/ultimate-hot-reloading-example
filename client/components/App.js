const React = require('react');
const { connect } = require('react-redux');

const styles = require('./App.css');

@connect(state => ({
  count: state,
}))
class App extends React.Component {
  static propTypes = {
    count: React.PropTypes.object,
    dispatch: React.PropTypes.func
  };

  render() {
    const { count, dispatch } = this.props;

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
  }
}

module.exports = App;
