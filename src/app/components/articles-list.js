var React = require('react');

class Articleslist {
  add(article) {
    var id = article['_id'];

    return (
      <div className="article" key={id}>
        <p>
          Artigo nº.{article.number} {article.letter}
        </p>
        <p>{article.title}</p>
        <p dangerouslySetInnerHTML={{__html: article.content}}></p>
      </div>
    );
  }
  render() {
    return (
      <div className="articles-list">
        {this.props.articles.map(this.add)}
      </div>
    );
  }
};

module.exports = React.createClass(Articleslist.prototype);
