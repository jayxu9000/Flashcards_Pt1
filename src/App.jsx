import './App.css';
import { useState } from 'react';

const App = () => {

  const [frontText, setFrontText] = useState('Start')
  const [backText, setBackText] = useState('Press the next arrow to start the flashcards :)')
  const [vid, setVid] = useState('')
  const [index, setIndex] = useState(-1)
  const [text, setText] = useState(frontText)

  const frontData = ['Cupid', 'OMG', 'Antifragile', 'I AM', 'Seven']
  const backData = ['Fifty Fifty', 'NewJeans', 'Le Sserafim', 'IVE', 'Jung Kook']
  const vidData = ['https://www.youtube.com/watch?v=6uvUTu716rU', 'https://www.youtube.com/watch?v=_ZAgIHmHLdc', 'https://www.youtube.com/watch?v=pyf8cbqyfPs', 'https://www.youtube.com/watch?v=QU9c0053UAU']

  const flipCard = () => {
    if (text == frontText) {
      setText(backText)
    } 
    else {
      setText(frontText)
    }
  }
  
  const updateCard = () => {
    if (index < 4) {
      setIndex(index + 1)
    }
    else {
      setIndex(0)
    }
    setText(frontData[index])
    setFrontText(frontData[index])
    setBackText(backData[index])
    setVid(vidData[index])
  }

  return (
    <div className="App">
      <h2>Kpop Songs and Artists</h2>
      <h4>Can you recognize the artist for this kpop song?</h4>
      <h5>Number of cards: 5</h5>

      <div className='card' onClick={flipCard}>{text}</div>
      <button onClick={updateCard}>⭢</button>
    </div>
  )
}

export default App
