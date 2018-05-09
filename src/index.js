import React from 'react';
import ReactDom from 'react-dom';

// Create new component that produces HTML.

// const App = function() {
//   return <div>Hey!!</div>;
// };

// Same as above fuction declaration, but utilizes 'fat arrow' instead of 'function'

const App = () => {
  return <div>Hey!!</div>;
};
//Take this component's generated HTML and display on DOM.

ReactDom.render(<App />, document.querySelector('.container'));