var React = require('react');
var Router = require('react-router');

class Document {
  render() {
    var id = this.getParams().id;
    return (
      <div className="document" key={id}>
        <h1>Document {id}</h1>
      </div>
    );
  }
};

Document.prototype.mixins = [Router.State];

module.exports = React.createClass(Document.prototype);
