import React from 'react'
import uniqid from 'uniqid'

const GameMain = ({ cards, guessedCards, setGuessedCards}) => {

  // pushing new guess to guessedCards
  const addMove = card => {
    const previousGuesses = [...guessedCards];
    setGuessedCards([...previousGuesses, card])
  }
  
  return (
    <div className='game__main'>
      <ul className='game__cards'>
        {cards.map(item =>
          <li
            className={`game__card ${item.split(' ').join('')}`}
            key={uniqid()}
            onClick={() => addMove(item)}>
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}

export default GameMain