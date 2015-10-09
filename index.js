var React = require('react');
var assign = Object.assign || require('react/lib/Object.assign');

module.exports = function createStub(ChildComponent, context) {
  var contextTypes = {};

  Object.keys(context).forEach(function (key) {
    contextTypes[key] = React.PropTypes.any;
  });

  var ContextWrapper = React.createClass({
    displayName: 'ContextParent',
    childContextTypes: contextTypes,
    getChildContext: function () {
      return context;
    },
    render: function () {
      return this.props.children;
    }
  });

  return React.createClass({
    displayName: 'ReactTestContextWrapper',
    childContextTypes: contextTypes,
    getChildContext: function () {
      return context;
    },
    render: function () {
      return React.createElement(
        ContextWrapper,
        {ref: 'parentElement'},
        React.createElement(ChildComponent, assign({}, this.props, {ref: 'baseElement'}))
      );
    }
  });
}
