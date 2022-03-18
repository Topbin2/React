import { getAllByTitle } from "@testing-library/react";
import { createFactory, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSelect = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = (value) => {
    youtube.search(value).then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube.mostPopular().then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <VideoSearch onSearch={onSearch} />
      <div className={selectedVideo && styles.container}>
        <div className={styles.detail}>
          {selectedVideo && <VideoDetail video={selectedVideo} />}
        </div>
        <div className={selectedVideo && styles.list}>
          <VideoList
            key={videos.id}
            videos={videos}
            onSelect={onSelect}
            display={selectedVideo ? "list" : "flex"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
