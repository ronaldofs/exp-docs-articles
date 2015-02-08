var React = require('react');
var request = require('superagent');

var DocumentsList = require('./documents-list');

class Documents {
  getInitialState() {
    return {
      documents: []
    }
  }
  componentDidMount() {
    this.getDocuments();
  }
  getDocuments() {
    request.get('http://localhost:3001')
      .end((err, res) => {
        if (!this.isMounted()) return;
        this.resetDocuments(res.body);
      });
  }
  resetDocuments(documents) {
    this.setState({ documents: documents });
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
