const TestContext = require('../index');
const assert = require('assert');

module.exports = function (React, TestUtils, getDOMNode) {
  describe(`testContext`, function () {

    let testEl;

    beforeEach(function () {
      const Foo = React.createClass({
        contextTypes: {
          foo: React.PropTypes.string
        },
        render: function () {
          return <div>{this.context.foo}</div>;
        }
      });
      const FooStubbed = TestContext(Foo, {foo: 'hello'});
      testEl = TestUtils.renderIntoDocument(<FooStubbed bar="bar" />);
    });

    it('should mock the context', function () {
      assert.ok(getDOMNode(testEl));
    });

    it('should have a reference to the base element', function () {
      assert.ok(testEl.refs.baseElement);
    });

    it('should add the correct context to the base element', function () {
      assert.equal(testEl.refs.baseElement.context.foo, 'hello');
    });

    it('should have a reference to the inner parent element', function () {
      assert.ok(testEl.refs.parentElement);
    });

    it('should preserve props', function () {
      assert.equal(testEl.refs.baseElement.props.bar, 'bar');
    });

  });
};
