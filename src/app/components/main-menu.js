var React = require('react');
var Router = require('react-router');
var { Link } = Router;

class MainMenu {
  render() {
    return (
      <div className="main-menu">
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="documents">Documents</Link></li>
        </ul>
      </div>
    );
  }
};

module.exports = React.createClass(MainMenu.prototype);
