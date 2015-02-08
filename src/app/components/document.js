var React = require('react');
var Router = require('react-router');

class Document {
  render() {
    var slug = this.getParams().slug;

    return (
      <div className="document" key={slug}>
        <h1>Document: {slug}</h1>
      </div>
    );
  }
};

Document.prototype.mixins = [Router.State];

module.exports = React.createClass(Document.prototype);
