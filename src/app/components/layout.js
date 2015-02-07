var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

class Layout {
  render() {
    return (
      <div className="container">
        <RouteHandler />
      </div>
    );
  }
}

module.exports = React.createClass(Layout.prototype);
