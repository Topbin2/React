import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/Video_list/Video_list";
import Search_header from "./components/Search_header/Search_header";
import Video_detail from "./components/Video_detail/Video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const onSearch = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((video) => {
          setVideos(video);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((video) => setVideos(video));
  }, [youtube]);

  return (
    <div className={styles.app}>
      <Search_header onSearch={onSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <Video_detail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={onVideoClick}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
