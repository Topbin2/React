import { useState } from "react";
import Text from "./Text";

function App() {
  let members = [
    "모상빈",
    "김기욱",
    "이혜진",
    "이동기",
    "김현수",
    "박수연",
    "송슬기",
    "정혜선",
    "지영준",
  ];

  function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
  }

  function shuffleArray(arr) {
    arr.sort(() => Math.random() - 0.5);
  }

  const [result, setResult] = useState(members);

  const onShuffle = () => {
    
  };

  return (
    <main className="main-container">
      <button className="shuffle-btn" onClick={onShuffle}>
        SHUFFLE
      </button>
      {/* <Text members={result} /> */}
    </main>
  );
}

export default App;
