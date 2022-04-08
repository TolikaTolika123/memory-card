import React, { useState, useEffect } from "react";
import './styles/index.scss';
import GameNavbar from "./components/GameNavbar";
import GameMain from "./components/GameMain";
import RulesPopup from "./components/RulesPopup";

function App() {
  const [rulesModal, setRulesModal] = useState(true);
  const [currentScore, setCurrentScore] = useState(0);

  const [cards, setCards] = useState([
    'The Witch-king of Angmar',
    'The Dark Marshal',
    'Khamûl The Easterling',
    'The Betrayer',
    'The Shadow Lord',
    'The Undying',
    'The Dwimmerlaik',
    'The Tainted',
    'The Knight of Umbar'
  ]);

  const [guessedCards, setGuessedCards] = useState([]);

  useEffect(() => {

    // doesn't run on initial render
    if (guessedCards.length > 0) {

      // checks if guesses are reapeating
      if (guessedCards.some((val, i) => guessedCards.indexOf(val) !== i)) {
        setCurrentScore(0)
        setGuessedCards([])
      } else {
        setCurrentScore(currentScore + 1);
      };
  
      // shuffles cards
      const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
      setCards(shuffledCards);
    }
    
  }, [guessedCards])

  return (
    <div className="App">
      <GameNavbar {...{currentScore}} />
      <GameMain {...{cards, guessedCards, setCards, setGuessedCards}} />
      {rulesModal && <RulesPopup setModal={setRulesModal} />}
    </div>
  );
}

export default App;
