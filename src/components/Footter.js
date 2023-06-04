import React from 'react'
import './style.css'

const Footter = ({onNewGameClick,onSuggestClick}) => {
  return (
    <div className="footer_container">
      <div className='yumm'>
          <button className='button-56' onClick={onNewGameClick}>New Game</button>
          <button className='button-56' onClick={onSuggestClick}>Suggest</button>
      </div>
      <h1 className='branding' >Made by 
          <a
          className='github_link'
           href='https://github.com/hassanjawwad12'>
           Hassan
          </a>
      </h1>
    </div>
  )
}

export default Footter
