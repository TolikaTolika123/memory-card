import React from 'react'

const RulesPopup = ({ setModal }) => {
  return (
    <div className='game__rules'>
      <div className="game__rules-container">
        <p className='game__rules-text'>
          Click random card, remember it and click another card, if you click same card two times - you will lose.
        </p>
        <button className='game__rules-btn' onClick={() => setModal(false)}>Ok</button>
      </div>
    </div>
  )
}

export default RulesPopup