import React, {useState, useEffect} from 'react'

const GameNavbar = ({currentScore}) => {
  const [bestScore, setBestScore] = useState(0);

  // setting best score
  useEffect(() => {
    if (currentScore > bestScore) setBestScore(currentScore);
  }, [currentScore])

  return (
    <nav className="game__navbar">
      <h1 className='game__title'>lotr memory game</h1>
      <div className="game__scores">
        <div className="game__score">score: {currentScore}</div>
        <div className="game__score">best score: {bestScore}</div>
      </div>
    </nav>

  )
}

export default GameNavbar