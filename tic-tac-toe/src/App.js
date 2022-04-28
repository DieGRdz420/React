import { useEffect, useState } from "react";
import { Board } from "./components/Board";
import { Square } from "./components/Square";

const defaultSquares = () => (new Array(9)).fill( null );

const lines = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6],
];

function App() {

  const [squares, setSquares] = useState(defaultSquares());
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const isComputerTurn = squares.filter(square => square !== null).length % 2 === 1;
    const linesThatAre = (a, b, c) => { 
        return lines.filter(squareIndexes => {
          const squareValues = squareIndexes.map(index => squares[index]);
          return JSON.stringify([a, b, c].sort()) === JSON.stringify(squareValues.sort());
        });
      };
    let emptyIndexes = squares
                        .map((square, index) => square == null ? index : null)
                        .filter(val => val !== null);
    const playerWon = linesThatAre('x', 'x', 'x').length > 0;
    const computerWon = linesThatAre('o', 'o', 'o').length > 0;
      if (playerWon) {
        setWinner('x');
      };
      if (computerWon) {
        setWinner('o');
      };

    const putComputerAt = index => {
      let newSquares = squares;
      newSquares[index] = 'o';
      setSquares([ ...newSquares ]);
    };

    if(isComputerTurn) {
      //Algoritmo para ganar
      const winingLines = linesThatAre('o', 'o', null);
      if (winingLines.length > 0) {
        const winIndex = winingLines[0].filter(i => squares[i] === null)[0];
        putComputerAt(winIndex);
        return;
      };

      //Algoritmo para Bloquear
      const linesToBlock = linesThatAre('x', 'x', null);
      if (linesToBlock.length > 0) {
        const blockIndex = linesToBlock[0].filter(i => squares[i] === null)[0];
        putComputerAt(blockIndex);
        return;
      };

      //Algoritmo continuar linea
      const linesToContinue = linesThatAre('o', 'o', null);
      if (linesToContinue.length > 0) {
        putComputerAt(linesToContinue[0].filter(i => squares[i] === null)[0]);
        return;
      };

      const randomIndex = emptyIndexes[ Math.ceil( Math.random()*emptyIndexes.length ) ]
      putComputerAt(randomIndex)
    }
  }, [squares]);

  function handleSquareClick (index) {
    const isPlayerTurn = squares.filter(square => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = 'x';
      setSquares( [...newSquares] );
    }
  };

  return (
    <main className="App">
      <Board > 
          { squares.map((square, index) => {
              return <Square 
                        x={ square === 'x' ? 1 : 0 }
                        o={ square === 'o' ? 1 : 0 }
                        onClick={() => handleSquareClick(index)} />
            }) }
      </Board>
      { !!winner && winner === 'x' && (
        <div className="result green" >
          Ganaste!(:
        </div>
      )}
      { !!winner && winner === 'o' && (
        <div className="result red" >
          Perdiste!):
        </div>
      )}
    
    </main>
  );
}

export default App;
