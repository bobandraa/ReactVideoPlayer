import React from 'react';

const VideoDetail = ({video}) => {
  // Below 2 lines are an AJAX spinner
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  // const url = 'https://www.youtube.com/embed/' + videoId; this is the same as above
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};


export default VideoDetail;

const API_KEY = 'AIzaSyDvaC0AUaPOxD8ROkEqYH4j1HEv-AxLLxE';