
var React = require('react');
var Actions = require('./actions');
var reducer = require('./reducers');

var store = require('redux').createStore(reducer);

function render() {
  require('react-dom').render(

  );
}

render();

// Note: subscribing and rerendering here, at the top level, is using a
// large hammer for a small nail. It's simple and it works, but it's
// inefficient. It's better if each component listens just for changes
// that affect it, individually. react-redux does this for us if we use
// its connect function. See
// http://redux.js.org/docs/basics/UsageWithReact.html and
// https://github.com/reactjs/react-redux for more info.
store.subscribe(render);
