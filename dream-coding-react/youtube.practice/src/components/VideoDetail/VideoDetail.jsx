import React from "react";
import styles from "./VideoDetail.module.css";

const VideoDetail = (props) => {
  return (
    <div>
      <h1>{props.video.snippet.channelTitle}</h1>
    </div>
  );
};

export default VideoDetail;
