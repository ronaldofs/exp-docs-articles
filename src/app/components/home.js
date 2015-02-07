var React = require('react');
var Router = require('react-router');
var { Link } = Router;

class Home {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
      </div>
    );
  }
};

module.exports = React.createClass(Home.prototype);
