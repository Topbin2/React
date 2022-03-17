import React from "react";
import styles from "./Video_detail.module.css";

const Video_detail = ({ video }) => {
  return <div>{video.snippet.title}</div>;
};

export default Video_detail;
