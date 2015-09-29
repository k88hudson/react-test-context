var React = require('react');

module.exports = function createStub(ChildComponent, context) {
  var contextTypes = {};

  Object.keys(context).forEach(key => contextTypes[key] = React.PropTypes.any);

  return React.createClass({
    displayName: 'ReactTestContextWrapper'
    childContextTypes: contextTypes,
    getChildContext: function () {
      return context;
    },
    render: function () {
      return <ChildComponent ref="baseElement" {...this.props} />
    }
  });
}
