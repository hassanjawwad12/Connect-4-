import GameCircle from "./GameCircle"
import {useState } from "react"
import './style.css'
import Footter from "./Footter";
import Playing from "./Playing";
import { isWinner } from "../helper";
import { isDraw } from "../helper";
import { GetComputerMove } from "../helper";
import React from "react";


import { game_state_draw, game_state_playing,game_state_win,NoPlayer,Player1,Player2 } from "./constants";
import { useEffect } from "react";


const GameBoard = () => {
const [gameBoard,setgameBoard]=useState(Array(16).fill(NoPlayer)); //initially set the array to 0 
const [currentPlayer,setcurrentPlayer]=useState(Player1);
const [gameState,setGameState]=useState(game_state_playing);
const [winplayer,setWinPlayer]=useState(NoPlayer);


useEffect(()=> {
    initGame();
},[]);

const initGame =()=> {
   setgameBoard(Array(16).fill(NoPlayer));
   setcurrentPlayer(Player1);
   setGameState(game_state_playing);
}

const initBoard=()=> {

  const circles=[];
  for(let i=0; i<16;i++)
  {
     circles.push(RenderCircle(i));
  }
  return circles;
}

const suggestMove=()=> {
   circleClicked(GetComputerMove(gameBoard));

}

const circleClicked =(id) => {

if(gameBoard[id]!== NoPlayer) return;
if(gameState !== game_state_playing) return ;

 if(isWinner(gameBoard,id,currentPlayer))
{
   setGameState(game_state_win);
   setWinPlayer(currentPlayer);
}

if(isDraw(gameBoard,id,currentPlayer))
{
   setGameState(game_state_draw);
   setWinPlayer(NoPlayer);
}

   setgameBoard(prev => {
    return prev.map((circle,pos)=> {
      if (pos===id) return currentPlayer;
      return circle; 
   })
}) 
 setcurrentPlayer(currentPlayer ===Player1 ? Player2:Player1);

}

const RenderCircle =id => {
   return <GameCircle  key={id} id={id} className={`player${gameBoard[id]}`} onCircleClicked={circleClicked}/>
}

    return (
        <div className="parent">
        
        <Playing gameState={gameState} currentPlayer={currentPlayer} winplayer={winplayer}/>
        <div className="board">  
                 
           {initBoard()}
        </div>
        <Footter onNewGameClick={initGame} onSuggestClick={suggestMove} />
        </div>
    )
    
    }

export default GameBoard

/* when the user clicks the circle it updates its value from 0 to 1 
firstly we set the value of id to 0 of all the circles using the usestate hook of react 

then we made a function of render circle which basically updates the id according to the click of the user 
initially it is set to white as no player is playing 
later on as the player clicks it updates the id and color is updated in gamecircle component 

In init board we bascially created a blank array and then the pushed the output of our render circle in it 
we called the same init board later on 
It loops 16 times as there are 16 different circles in the game 
It returns circles which is a JSX element 

In Render circle we used a prop key to distinguish between each component circles otherwise there was no way to distinguish between them

player takes current player prop and passes it to the playing.js file 
 */