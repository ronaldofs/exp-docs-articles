var React = require('react');

class DocumentsList {
  add(document) {
    return <li>{document.title}</li>
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
