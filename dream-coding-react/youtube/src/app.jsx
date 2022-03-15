import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [video, setVideos] = useState([]);


  useEffect(()=> {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDhEeHaM-lrpgIYTkseTk-eiB9kp9X4-qg", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.item))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div>{video}</div>
  );
}

export default App;
