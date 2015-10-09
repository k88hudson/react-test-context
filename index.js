var React = require('react');
var assign = Object.assign || require('react/lib/Object.assign');

module.exports = function createStub(ChildComponent, context) {
  var contextTypes = {};

  Object.keys(context).forEach(function (key) {
    contextTypes[key] = React.PropTypes.any;
  });

  var contextMixin = {
    childContextTypes: contextTypes,
    getChildContext: function () {
      return context;
    }
  };

  var ContextWrapper = React.createClass(assign({
    displayName: 'TestContextParent',
    render: function () {
      return this.props.children;
    }
  }, contextMixin));

  return React.createClass(assign({
    displayName: 'TestContextWrapper',
    render: function () {
      return React.createElement(
        ContextWrapper,
        {ref: 'parentElement'},
        React.createElement(ChildComponent, assign({}, this.props, {ref: 'baseElement'}))
      );
    }
  }, contextMixin));
}
