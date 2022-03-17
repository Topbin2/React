import React from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoList.module.css";

const VideoList = (props) => {
  return (
    <ul className={styles.container}>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} onSelect={props.onSelect} />
      ))}
    </ul>
  );
};

export default VideoList;
