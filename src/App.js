import React, { useState, useEffect } from "react";
import './styles/index.scss';
import GameNavbar from "./components/GameNavbar";
import GameMain from "./components/GameMain";
import RulesPopup from "./components/RulesPopup";

function App() {
  const [modal, setModal] = useState(true);

  const cards = [
    'The Witch-king of Angmar',
    'The Dark Marshal',
    'Khamûl The Easterling',
    'The Betrayer',
    'The Shadow Lord',
    'The Undying',
    'The Dwimmerlaik',
    'The Tainted',
    'The Knight of Umbar'
  ];

  const guessedCards = [];

  return (
    <div className="App">
      <GameNavbar {...{cards, guessedCards}} />
      <GameMain {...{cards, guessedCards}} />
      {modal && <RulesPopup setModal={setModal} />}
    </div>
  );
}

export default App;
