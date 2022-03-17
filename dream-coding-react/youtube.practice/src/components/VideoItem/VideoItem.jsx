import React from "react";
import styles from "./VideoItem.module.css";

const VideoItem = ({ video, video: { snippet }, onSelect }) => {
  return (
    <div className={styles.container} onClick={()=> onSelect(video)}>
      <img
        className={styles.thumbnail}
        src={snippet.thumbnails.medium.url}
        alt="vidoe-thumbnail"
      />
      <div className={styles.textContainer}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channelTitle}>{snippet.channelTitle}</p>
      </div>
    </div>
  );
};

export default VideoItem;
