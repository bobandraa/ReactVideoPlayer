import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //Needs relative path when importing anything but libraries
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDvaC0AUaPOxD8ROkEqYH4j1HEv-AxLLxE';


// Create new component that produces HTML.
    // const App = function() {
   //   return <div>Hey!!</div>; };
// Same as above fuction declaration, but utilizes 'fat arrow' instead of 'function'
    // Below is a functional component
    // const App = () => {
    //   return (
    //     <div>
    //       <SearchBar />
    //     </div>
    //   );
    // };

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };


    // below is a network request
    YTSearch({key: API_KEY, term: 'kittens'}, (videos) => {
      // this.setState({ videos: videos });
      // below is the same line with ES6 synatx and is rendered the same. Only works when the key and the
      // value have the same string
      this.setState({ videos });
    });
  }

  render() {
      return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
      );
    }
  }






//Take this component's generated HTML and display on DOM.

ReactDom.render(<App />, document.querySelector('.container'));