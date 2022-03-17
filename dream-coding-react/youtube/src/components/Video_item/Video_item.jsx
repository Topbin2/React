import React from "react";
import styles from "./Video_item.module.css";

const VideoItem = (props) => {
  return (
    <li className={styles.container} onClick={() => props.onVideoClick(props.video)}>
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={props.video.snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{props.video.snippet.title}</p>
          <p className={styles.channel}>{props.video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
