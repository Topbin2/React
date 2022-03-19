import React from "react";
import styles from "./VideoDetail.module.css";

const VideoDetail = ({ video }) => {
  return (
    <>
      <iframe
        id="ytplayer"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h1>{video.snippet.channelTitle}</h1>
      <p>{video.snippet.description}</p>
    </>
  );
};

export default VideoDetail;
