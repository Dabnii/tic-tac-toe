import React, { useState } from 'react';
import GameStatus from '../GameStatus/GameStatus';
import Score from '../Score/Score';
import WIN_CONDITION from './WIN_CONDITION';
import styled from 'styled-components';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [score, setScore] = useState(null);
  const [winData, setWinData] = useState([]);
  const [displayModal, setDisplayModal] = useState(true);
  const [numGamesPlayed, setNumGamesPlayed] = useState(0);

  const isTie = board.every(el => el !== null);
  const isWinner = score !== null;

  const winRecord = score => {
    setWinData(prev => [...prev, score]);
  };

  const newGame = () => {
    if (isWinner) {
      setScore(null);
    }

    setBoard(Array(9).fill(null));
    winRecord(score);
    setXPlayer(true);
    setNumGamesPlayed(prev => prev + 1);

    if (numGamesPlayed === 1) {
      setDisplayModal(true);
      setNumGamesPlayed(0);
    }
  };

  const changePlayer = index => {
    if (board[index] !== null || isWinner) {
      return;
    }

    const updateBoard = board.map((value, idx) =>
      idx === index ? (xPlayer ? 'X' : 'O') : value
    );

    defineWinner(updateBoard);
    setBoard(updateBoard);
    setXPlayer(!xPlayer);
  };

  const defineWinner = board => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setScore(`${board[x]}`);
      }
    }
  };

  return (
    <React.Fragment>
      {(isWinner || isTie) && (
        <GameStatus
          // handleRefreshClick={handleRefreshClick}
          score={score}
          isTie={isTie}
          isWinner={isWinner}
          newGame={newGame}
          setDisplayModal={setDisplayModal}
          displayModal={displayModal}
        ></GameStatus>
      )}
      <GameContainer>
        <Board>
          {board.map((item, index) => (
            <Square
              value={index}
              key={index}
              onClick={() => changePlayer(index)}
              disabled={score}
            >
              {item === 'X' && <X src='/images/X.png' alt='X' />}
              {item === 'O' && <O src='/images/Ellipse.png' alt='O' />}
            </Square>
          ))}
        </Board>
        <Score
          score={score}
          xPlayer={xPlayer}
          // handleRefreshClick={handleRefreshClick}
          winData={winData}
        />
      </GameContainer>
    </React.Fragment>
  );
}

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 600px;
  aspect-ratio: 1 / 1;
  border-radius: 30px;
  background-color: rgb(233, 233, 233);
  overflow: hidden;
`;

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  aspect-ratio: 1/1;
  border: 2px solid #abcfa1;
  background-color: transparent;
  font-size: 80px;
  font-weight: 700;
  color: #ff756b;

  &:hover {
    background-color: #d4d4d4;
  }
`;

const X = styled.img`
  height: 108px;
  background-color: transparent;
`;

const O = styled.img`
  height: 108px;
  background-color: transparent;
`;

export default Game;
