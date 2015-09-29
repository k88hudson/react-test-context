var React = require('react');
var assign = Object.assign || require('react/lib/Object.assign');

module.exports = function createStub(ChildComponent, context) {
  var contextTypes = {};

  Object.keys(context).forEach(function (key) {
    contextTypes[key] = React.PropTypes.any;
  });

  return React.createClass({
    displayName: 'ReactTestContextWrapper',
    childContextTypes: contextTypes,
    getChildContext: function () {
      return context;
    },
    render: function () {
      return React.createElement(ChildComponent, assign({}, this.props, {ref: 'baseElement'}));
    }
  });
}
