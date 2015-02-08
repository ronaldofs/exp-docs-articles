var React = require('react');
var Router = require('react-router');
var { Route } = Router;

var Layout = require('./components/layout');
var Home = require('./components/home');
var Documents = require('./components/documents');
var Document = require('./components/document');

var routes = (
  <Route handler={Layout}>
    <Route name="home" path="/" handler={Home} />
    <Route name="documents" path="/documents" handler={Documents} />
    <Route name="document" path="/documents/:id" handler={Document} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});
