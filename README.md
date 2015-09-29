# React Test Context

A tiny utility to help you test components that use React's `context` feature.

## Example usage

```jsx
const stub = require('react-test-context');
const Foo = require('./components/Foo');
const fakeContext = {name: 'Kate', height: 183};

// Create a new React class to stub your context
const FooStubbed = stub(Foo, fakeContext);

const element = React.TestUtils.renderIntoDOM(<FooStubbed someProp="whatever" />);

// This is the ref to your inner element
const ref = element.refs.baseElement;
```
