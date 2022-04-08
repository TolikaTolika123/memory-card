import React from 'react'

const GameNavbar = () => {
  return (
    <nav className="game__navbar">
      <h1 className='game__title'>lotr memory game</h1>
      <div className="game__scores">
        <div className="game__score">3</div>
        <div className="game__score">5</div>
      </div>
    </nav>

  )
}

export default GameNavbar