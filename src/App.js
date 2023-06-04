import React from 'react'
import GameBoard from './components/GameBoard'
import './styling.css'




function App() {
  return (
    <div>
      <h1 className='crazy' >Welcome to Connect-4</h1>

      
      <GameBoard/>
    </div>
    
  )
}

export default App