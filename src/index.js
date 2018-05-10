import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar'; //Needs relative path when importing anything but libraries

// Create new component that produces HTML.

// const App = function() {
//   return <div>Hey!!</div>; };


// Same as above fuction declaration, but utilizes 'fat arrow' instead of 'function'

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};




//Take this component's generated HTML and display on DOM.

ReactDom.render(<App />, document.querySelector('.container'));