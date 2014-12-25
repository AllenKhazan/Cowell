var Cowell = require('./cowell');
var React = require('react');

var {Route, Routes} = require('react-router');

React.renderComponent((
  <Routes>
    <Route path="/" handler={Cowell}>
    </Route>
  </Routes>
), document.body);
