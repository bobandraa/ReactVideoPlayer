import _ from 'lodash';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; //Needs relative path when importing anything but libraries
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = process.env.API_KEY;



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

    this.state = {
      videos: [],
      selectedVideo: null
    };


    // below is an AJAX network request
    YTSearch({key: API_KEY, term: 'kittens'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      // this.setState({ videos: videos });
      // below is the same line with ES6 synatx and is rendered the same. Only works when the key and the
      // value have the same string
      // this.setState({ videos });
    });
  }




  // Everytime state is set again, component re-renders
  render() {
      // Throttling search with lodashs debounce function
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

      return (
        <div>
          <SearchBar onSearchTermChange={videoSearch} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            /*passing the below as a property to VideoList*/
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
      );
    }
  }






//Take this component's generated HTML and display on DOM.

ReactDom.render(<App />, document.querySelector('.container'));