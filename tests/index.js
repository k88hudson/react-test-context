const ReactDOM = require('react-dom');

require('./test')(require('react'), require('react-addons-test-utils'), function (el) {
  return ReactDOM.findDOMNode(el);
});
