import './App.css';
import { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(0);
  const [isFront, setIsFront] = useState(true);

  const frontData = ['Cupid', 'OMG', 'Antifragile', 'I AM', 'Seven'];
  const backData = ['Fifty Fifty', 'NewJeans', 'Le Sserafim', 'IVE', 'Jung Kook'];

  const flipCard = () => {
    setIsFront((prevIsFront) => !prevIsFront);
  };

  const nextCard = () => {
    if (index < frontData.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIndex(0); // Reset to the first card when at the end
    }
    setIsFront(true); // Show the front of the card when advancing to the next card
  };

  const getCurrentText = () => {
    if (index === 0 && isFront) {
      return "Start";
    } else if (index === 0 && !isFront) {
      return "Press the next arrow to start the flashcards :)";
    } else {
      return isFront ? frontData[index] : backData[index];
    }
  };

  const cardClassName = isFront ? 'card' : 'card flipped'; // Toggle the "flipped" class

  return (
    <div className="App">
      <h2>Kpop Songs and Artists</h2>
      <h4>Can you recognize the artist for this kpop song?</h4>
      <h5>Number of cards: 5</h5>

      <div className={cardClassName} onClick={flipCard}>
        {isFront ? (
          <>
            <div>
              {index === 0 ? <p>Start</p> : <p>{getCurrentText()}</p>}
            </div>
          </>
        ) : (
          <div>
            <p>{getCurrentText()}</p>
          </div>
        )}
      </div>
      <button onClick={nextCard}>⭢</button>
    </div>
  );
};

export default App;
