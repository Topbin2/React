import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

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
      <VideoList key={videos.id} videos={videos} />
    </>
  );
}

export default App;
