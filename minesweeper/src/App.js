import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from "react";

function App() {
  const [board, setBoard] = useState([])
  const [board2, setBoard2] = useState([])
  const [board3, setBoard3] = useState([])
  
 

let outerArray = [];
let bomb = '💣'



// loop to set board based on board size (default is 10 by 10)
useEffect(() => {
    for (let i = 1; i <= 10; i++){
      for(let j = 1; j<=10; j++){
        outerArray.push({
          wasClicked: false, value: 0, adjacentBombCount: 0, isBomb: false, x: i, y:j
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
          cell.isBomb = true
        }
      })
      newBoard.push(cell)
    })
    setBoard2(newBoard)
  }, [board])


//change the value 
useEffect(() => {
  for (let i = 0; i < board2.length; i++){
    let cell = board2[i]
    if (cell.isBomb === true){
      cell.value = bomb
      // first 4 edge cases are the corners:
      // top left
      if(cell.x === 1 && cell.y === 1){
        if (board2[i+1].value !== bomb){
          board2[i+1].value += 1
        }
        if (board2[i+10].value !== bomb){
          board2[i+10].value += 1
        }
        if (board2[i+11].value !== bomb){
          board2[i+11].value += 1
        }
      }
      // top right
      if(cell.x === 1 && cell.y === 10){
        if (board2[i-1].value !== bomb){
          board2[i-1].value += 1
        }
        if (board2[i+9].value !== bomb){
          board2[i+9].value += 1
        }
        if (board2[i+10].value !== bomb){
          board2[i+10].value += 1
        }
      }
      // bottom left
      if(cell.x === 10 && cell.y === 1){
        if (board2[i-10].value !== bomb){
          board2[i-10].value += 1
        }
        if (board2[i-9].value !== bomb){
          board2[i-9].value += 1
        }
        if (board2[i+1].value !== bomb){
          board2[i+1].value += 1
        }
      } 
      // bottom right 
      if(cell.x === 10 && cell.y === 10){
        if (board2[i-10].value !== bomb){
          board2[i-10].value += 1
        }
        if (board2[i-11].value !== bomb){
          board2[i-11].value += 1
        }
        if (board2[i-1].value !== bomb){
          board2[i-1].value += 1
        }
      }
      // next 4 edge case are the edges
      // top edge
      if (cell.x === 1 && cell.y !== 1 && cell.y !== 10){
        if (board2[i-1].value !== bomb){
          board2[i-1].value += 1
        }
        if (board2[i+1].value !== bomb){
          board2[i+1].value += 1
        }
        if (board2[i+9].value !== bomb){
          board2[i+9].value += 1
        }
        if (board2[i+10].value !== bomb){
          board2[i+10].value += 1
        }
        if (board2[i+11].value !== bomb){
          board2[i+11].value += 1
        }
      }
      // right edge
      if (cell.y === 10 && cell.x !== 1 && cell.x !== 10){
        if (board2[i-10].value !== bomb){
          board2[i-10].value += 1
        }
        if (board2[i-11].value !== bomb){
          board2[i-11].value += 1
        }
        if (board2[i-1].value !== bomb){
          board2[i-1].value += 1
        }
        if (board2[i+9].value !== bomb){
          board2[i+9].value += 1
        }
        if (board2[i+10].value !== bomb){
          board2[i+10].value += 1
        }
      }
      // bottom edge
      if (cell.x === 10 && cell.y !== 1 && cell.y !== 10){
        if (board2[i-1].value !== bomb){
          board2[i-1].value += 1
        }
        if (board2[i-9].value !== bomb){
          board2[i-9].value += 1
        }
        if (board2[i-10].value !== bomb){
          board2[i-10].value += 1
        }
        if (board2[i-11].value !== bomb){
          board2[i-11].value += 1
        }
        if (board2[i+1].value !== bomb){
          board2[i+1].value += 1
        }
      }
      // left edge
      if (cell.y === 1 && cell.x !== 1 && cell.x !== 10){
        if (board2[i-10].value !== bomb){
          board2[i-10].value += 1
        }
        if (board2[i-9].value !== bomb){
          board2[i-9].value += 1
        }
        if (board2[i+1].value !== bomb){
          board2[i+1].value += 1
        }
        if (board2[i+10].value !== bomb){
          board2[i+10].value += 1
        }
        if (board2[i+11].value !== bomb){
          board2[i+11].value += 1
        }
      }
      //all the non edges
      if (cell.x !==1 && cell.x !== 10 && cell.y !== 1 && cell.y !== 10 ){
        if (board2[i-11].value !== bomb){
          board2[i-11].value += 1
        }
        if (board2[i-10].value !== bomb){
          board2[i-10].value += 1
        }
        if (board2[i-9].value !== bomb){
          board2[i-9].value += 1
        }
        if (board2[i-1].value !== bomb){
          board2[i-1].value += 1
        }
        if (board2[i+1].value !== bomb){
          board2[i+1].value += 1
        }
        if (board2[i+9].value !== bomb){
          board2[i+9].value += 1
        }
        if (board2[i+10].value !== bomb){
          board2[i+10].value += 1
        }
        if (board2[i+11].value !== bomb){
          board2[i+11].value += 1
        }
      }
      
    }

  }
  
  setBoard3(board2)
}, [board2])


function showTheValue(cell, index) {
  let hiddenValue = document.getElementById(`${index}`)
  hiddenValue.style.display = 'block'
  if (cell.isBomb){
    let boom = document.getElementsByClassName(`value`)
    for (let test of boom){
      test.style.display = 'block'
    }
    let boom2 = document.getElementsByClassName(`bomb`)
    for (let test of boom2){
      test.style.background = '#b72828'
    }
    // alert('Kaboom! Sorry You Lost!')
  } 
}

let bombRender = () => {
  let test = board3.map((cell, index) => {
    return (          
      cell.isBomb === true
      ? 
      (<div className='bomb' key={index} id='bomb' onClick={(event) => {
        showTheValue(cell, index)
        cell.wasClicked = true
        }}>
          <div className='value' id={index}>
            {cell.value} 
           </div>
        </div>)
      : 
      (<div className='cell' key={index} onClick={(event) => {
        showTheValue(cell, index)
        cell.wasClicked = true
        }}>
          <div className='value' id={index}>
            {cell.value} 
          </div>
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



