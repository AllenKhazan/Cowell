var Cowell = require('./cowell');
var React = require('react');

var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var routes = (
  <Route path="/" handler={Cowell}>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.body);
});
