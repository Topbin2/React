import React from "react";

const VideoItem = (props) => {
  return (
    <li>
      <img
        src={props.video.snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />
      <p>{props.video.snippet.title}</p>
      <p>{props.video.snippet.channelTitle}</p>
    </li>
  );
};

export default VideoItem;
