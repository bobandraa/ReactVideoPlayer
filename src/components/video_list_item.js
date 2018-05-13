import React from 'react';
// import VideoList from './video_list';

const VideoListItem = ({video}) =>{
  // const video = props.video;  refactored in VideoListItem argument & creates a new variable in component.
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>

        <div className="media-body">
          <div className="media-heading">{video.snippet.title}
        </div>
      </div>
    </div>
    </li>

  );
}


export default VideoListItem;