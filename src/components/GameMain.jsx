import React from 'react'
import uniqid from 'uniqid'

const GameMain = ({ cards, guessedCards }) => {
  const submitMove = card => {
    guessedCards.push(card);
    console.log(guessedCards)
  }
  return (
    <div className='game__main'>
      <ul className='game__cards'>
        {cards.map(item =>
          <li
            className={`game__card ${item.split(' ').join('')}`}
            key={uniqid()}
            onClick={() => submitMove(item)}>
            {item}
          </li>
        )}
      </ul>
    </div>
  )
}

export default GameMain