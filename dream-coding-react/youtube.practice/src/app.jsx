import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/VideoList/VideoList";
import VideoSearch from "./components/VideoSearch/VideoSearch";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
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
  <>
  <VideoSearch />
  <VideoList key={videos.id} videos={videos} />
  </>);
}

export default App;
