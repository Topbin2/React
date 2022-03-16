import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/Video_list/Video_list";
import Search_header from "./components/Search_header/Search_header";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (query) => {
    youtube
      .search(query) //
      .then(video => setVideos(video));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(video => setVideos(video));
  }, []);

  return (
    <div className={styles.app}>
      <Search_header onSearch={onSearch} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
