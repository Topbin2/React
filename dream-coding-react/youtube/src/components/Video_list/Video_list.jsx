import React from "react";
import VideoItem from "../Video_item/Video_item";
import styles from "./Video_list.module.css";

const VideoList = (props) => (
  <ul className={styles.videos}>
    {props.videos.map((video) => (
      <VideoItem key={video.id} video={video} onVideoClick={props.onVideoClick}/>
    ))}
  </ul>
);

export default VideoList;
