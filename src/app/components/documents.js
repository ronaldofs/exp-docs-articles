var React = require('react');
var Router = require('react-router');
var { Link } = Router;

class Documents {
  render() {
    return (
      <div className="documents">
        <h1>Documents</h1>
      </div>
    );
  }
};

module.exports = React.createClass(Documents.prototype);
