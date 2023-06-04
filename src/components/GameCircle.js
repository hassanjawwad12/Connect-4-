import React from 'react'
import './style.css'


const GameCircle = ({id,children,className,onCircleClicked}) => {
  return (
    <div className={`circle ${className}`} onClick={ () =>onCircleClicked(id)}>
        {children}
    </div>
  )
}

export default GameCircle;

/*the gamecircle function takes 2 parameters the id and the children from the game board component 
in the style file we actually pass the color which we defined in the gameboard component by using dynamic styling 
it shows if either player 1 or 2 is playing by the color 
we actually passed the classname here from the gameboard file where we defined the 2 colors and assigned them to circles 


*/
