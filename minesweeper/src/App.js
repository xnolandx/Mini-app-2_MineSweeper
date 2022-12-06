import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from "react";

function App() {
  const [board, setBoard] = useState([])
  const [board2, setBoard2] = useState([])

let outerArray = [];



// loop to set board based on board size (default is 10 by 10)
useEffect(() => {
    for (let i = 1; i <= 10; i++){
      for(let j = 1; j<=10; j++){
        outerArray.push({
          wasClicked: false, value: 0, adjacentBombCount: 0, isBomb: 'false', x: i, y:j
        })
      }
    }
  setBoard(outerArray)
  }, [])

  
//trying to set the bombs ???
useEffect(() => {
    let newBoard = []
    let array = []
    for (let i = 1; i <= 10; i++){
      let rand = Math.floor(Math.random() * 100) + 1;
      array.push(rand)
    }
    board.forEach((cell, index) => {
      array.forEach((number) => {
        if (number === index) {
          cell.isBomb = 'true'
        }
      })
      newBoard.push(cell)
    })
    setBoard2(newBoard)
  }, [board])

let bombRender = () => {
  let test = board2.map((cell, index) => {
    console.log(cell)
    return (          
      cell.isBomb === 'true'
      ? 
      <div className='bomb'>X</div>
      : 
      (<div className='cell' key={index} onClick={(event) => console.log(cell)}>
        {cell.x}/
        {cell.y}  
      </div>)
      )
  } )
  return test
}

  return (
    <>
    <div className="App">
      MineSweeper
    </div>

    {!board.length ? <div>Loading ...</div> : <div className="GameBoard"> {bombRender()}</div>}





    
    </>
  );
}

export default App;



