import React, { useState } from 'react';
import Score from '../Score/Score';
import WIN_CONDITION from './WIN_CONDITION';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlayer, setXPlayer] = useState(true);
  const [score, setScore] = useState(null);

  const isTie = board.every(el => el !== null);
  const isWinner = score !== null;

  const handleRefreshClick = () => {
    window.location.reload();
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
    <GameContainer>
      {isTie && (
        <TieScreen>
          Tie!
          <StyledLink to='/game'>
            <NewGame onClick={handleRefreshClick}>New Game!</NewGame>
          </StyledLink>
        </TieScreen>
      )}
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
        handleRefreshClick={handleRefreshClick}
      />
    </GameContainer>
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

const TieScreen = styled.div`
  position: absolute;
  bottom: 50;
  right: 50;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: (255, 255, 255, 0.1);
`;
const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 600px;
  aspect-ratio: 1 / 1;
  border-radius: 30px;
  background-color: rgb(233, 233, 233);
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
const NewGame = styled.button`
  &:hover {
    background-color: #78bd65;
  }
  width: inherit;
  height: 70px;
  border: 1px solid black;
  border-radius: 50px;
  font-size: 25px;
  font-weight: 600;
  background-color: #abcfa1;
`;
const StyledLink = styled(Link)`
  width: inherit;
`;
export default Game;
