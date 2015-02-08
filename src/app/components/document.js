var React = require('react');
var Router = require('react-router');
var request = require('superagent');

var API = 'http://localhost:3001/';
var ArticlesList = require('./articles-list');

function getDocument(slug, cb) {
  request.get(API + slug).end(cb);
}

function getArticles(slug, version, cb) {
  request.get(API + slug + '/articles/' + version).end(cb);
}

class Document {
  getInitialState() {
    return {
      slug: '',
      title: '',
      versions: [],
      articles: []
    }
  }
  componentDidMount() {
    var slug = this.getParams().slug;

    if (!slug) return;

    getDocument(slug, (err, res) => {
      var version = res.body.versions[0];

      this.resetDocument(res.body);

      if (version && version.number) {
        getArticles(slug, version.number, (err, res) => {
          if (!this.isMounted()) return;
          this.resetArticles(res.body);
        });
      }
    });
  }
  resetDocument(doc) {
    this.setState({
      slug: doc.slug,
      title: doc.title,
      versions: doc.versions
    });
  }
  resetArticles(articles) {
    this.setState({ articles: articles });
  }
  addVersion(version) {
    return (
      <option key={version.number} value={version.number}>
        Versão {version.number}
      </option>
    );
  }
  render() {
    var slug = this.getParams().slug;

    return (
      <div className="document">
        <h1>{this.state.title}</h1>
        <select value={this.state.selectedVersion}>
          {this.state.versions.map(this.addVersion)}
        </select>
        <ArticlesList articles={this.state.articles} />
      </div>
    );
  }
};

Document.prototype.mixins = [Router.State];

module.exports = React.createClass(Document.prototype);
