var React = require('react');
var Router = require('react-router');
var { Route } = Router;

var Layout = require('./components/layout');
var Home = require('./components/home');

var routes = (
  <Route handler={Layout}>
    <Route name="home" path="/" handler={Home} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});
