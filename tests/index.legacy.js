const React = require('react/addons');

require('./test')(React, React.addons.TestUtils, function (el) {
  return el.getDOMNode();
});
