var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

var MainMenu = require('./main-menu');

class Layout {
  render() {
    return (
      <div className="container">
        <MainMenu />
        <RouteHandler />
      </div>
    );
  }
}

module.exports = React.createClass(Layout.prototype);
