import './App.css';
import { useState } from 'react';

const App = () => {
  const [index, setIndex] = useState(-1);
  const [isFront, setIsFront] = useState(true);

  const frontData = ['Song 1: Cupid', 'Song 2: OMG', 'Song 3: Antifragile', 'Song 4: I AM', 'Song 5: Seven'];
  const backData = ['Artist 1: Fifty Fifty', 'Artist 2: NewJeans', 'Artist 3: Le Sserafim', 'Artist 4: IVE', 'Artist 5: Jung Kook'];

  const [answer, setAnswer] = useState('');

  const flipCard = () => {
    setIsFront((prevIsFront) => !prevIsFront);
  };

  const nextCard = () => {
    const newIndex = (index + 1) % frontData.length;
    setIndex(newIndex);
    setIsFront(true); // Show the front of the card
  };

  const previousCard = () => {
    const newIndex = (index - 1 + frontData.length) % frontData.length;
    setIndex(newIndex);
    setIsFront(true); // Show the front of the card
  };

  const getCurrentText = () => {
    if (index === -1 && isFront) {
      return "Start";
    } else if (index === -1 && !isFront) {
      return "Press the next arrow to start the flashcards :)";
    } else {
      return isFront ? frontData[index] : backData[index];
    }
  };

  const cardClassName = isFront ? 'card' : 'card flipped'; // Toggle the "flipped" class

  const handleSubmit = () => {
    if (backData[index] === answer) {
      alert('You are correct!');
    }
    else {
      alert('You are wrong or make sure you are not on the starting card.');
    }
  };

  return (
    <div className="App">
      <h2>Kpop Songs and Artists</h2>
      <h4>Can you recognize the artist for this kpop song?</h4>
      <h5>Number of cards: 5</h5>

      <div className={cardClassName} onClick={flipCard}>
        {isFront ? (
          index === -1 ? <p>Start</p> : <p>{getCurrentText()}</p>
        ) : (
          <p>{getCurrentText()}</p>
        )}
      </div>
      <button onClick={previousCard}>⭠</button>
      <button onClick={nextCard}>⭢</button>

      <form onSubmit={handleSubmit}>
        <label>Make your guess: </label>
        <input type="text" value={answer} onChange={(e) => {setAnswer(e.target.value)}} />
        <input type="submit" />
        <label> Format: (Artist #: Name)</label>
      </form>
    </div>
  );
};

export default App;
