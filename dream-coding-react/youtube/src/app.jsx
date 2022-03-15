import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/Video_list/Video_list";
import Search_header from "./components/Search_header/Search_header";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhEeHaM-lrpgIYTkseTk-eiB9kp9X4-qg",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.app}>
      <Search_header />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
