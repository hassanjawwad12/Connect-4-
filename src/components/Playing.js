import React from 'react'
import './style.css'
import { game_state_playing,game_state_win,game_state_draw } from './constants';


const Playing = ({gameState,currentPlayer,winPlayer}) => {
  const RenderLabel=()=> {
    switch(gameState) {
      case game_state_playing:
        return <div>Player {currentPlayer} turn</div> 
      case game_state_win:
        return <div>Player {winPlayer} wins</div> 
      case game_state_draw:
        return <div>Game Draw</div>    
      default:   
    }
  }

  return (
    <div className='YUM'>
        <button className='box'>{RenderLabel()}</button>
    </div>
  )
}

export default Playing

//we passed the current player prop from the gameboard file here to update the player number according to the turn 