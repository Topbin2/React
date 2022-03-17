import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/Video_list/Video_list";
import Search_header from "./components/Search_header/Search_header";
import Video_detail from "./components/Video_detail/Video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  const onVideoClick = (video)=> {
    setSelectedVideo(video);
  };

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
      {selectedVideo && <Video_detail video={selectedVideo} />}
      <VideoList videos={videos} onVideoClick={onVideoClick} />
    </div>
  );
}

export default App;
