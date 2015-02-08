var React = require('react');
var Router = require('react-router');
var { Link } = Router;

class DocumentsList {
  add(document) {
    return (
      <li><Link to="document" params={document}>{document.title}</Link></li>
    );
  }
  render() {
    return (
      <ul className="documents-list">
        {this.props.documents.map(this.add)}
      </ul>
    );
  }
};

module.exports = React.createClass(DocumentsList.prototype);
