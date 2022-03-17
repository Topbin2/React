import { useEffect, useState } from "react";
import "./app.css";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSelect = (video)=> {
    setSelectedVideo(video);
  };

  const onSearch = (value)=> {
    youtube.search(value)
      .then( videos => setVideos(videos));
    };

  useEffect(() => {
    youtube.mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <>
      <VideoSearch onSearch={onSearch} />
      <VideoDetail video={selectedVideo} />
      <VideoList key={videos.id} videos={videos} onSelect={onSelect}/>
    </>
  );
}

export default App;
