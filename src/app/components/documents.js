var React = require('react');

var DocumentsList = require('./documents-list');

class Documents {
  getInitialState() {
    return {
      documents: []
    }
  }
  render() {
    return (
      <div className="documents">
        <h1>Documents</h1>
        <DocumentsList documents={this.state.documents}/>
      </div>
    )
  }
};

module.exports = React.createClass(Documents.prototype);
