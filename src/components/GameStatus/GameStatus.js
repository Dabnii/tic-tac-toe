import React from 'react';
import styled from 'styled-components';

function GameStatus({
  score,
  displayModal,
  setDisplayModal,
  isWinner,
  newGame,
}) {
  return (
    <React.Fragment>
      {displayModal && (
        <GameStatusContainer>
          <StatusBox>
            <Close
              src='/images/close.png'
              alt='X'
              onClick={() => setDisplayModal(false)}
            />

            {isWinner ? (
              <StatusText>Winner</StatusText>
            ) : (
              <StatusText>Tie!</StatusText>
            )}
            {isWinner ? (
              score === 'O' ? (
                <PlayerImg src='/images/Ellipse.png' alt='X' />
              ) : (
                <PlayerImg src='/images/X.png' alt='O' />
              )
            ) : null}
            <Btn onClick={() => newGame()}>New game</Btn>
          </StatusBox>
        </GameStatusContainer>
      )}
    </React.Fragment>
  );
}

const GameStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 9999;
`;

const StatusBox = styled.div`
  display: flex;
  width: 800px;
  height: 500px;
  border-radius: 30px;
  background-color: white;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  z-index: 1;
`;

const Close = styled.img`
  background-color: transparent;
  position: absolute;
  top: 0;
  right: 0;
  margin: 30px 30px;
`;

const StatusText = styled.p`
  background-color: transparent;
  font-size: 40px;
  font-weight: 700;
`;

const PlayerImg = styled.img`
  background-color: transparent;
  width: 150px;
`;

const Btn = styled.button`
  appearance: unset;
  border: none;
  padding: 10px;
  width: 130px;
  border-radius: 30px;
  border: 2px solid black;
  font-weight: 700;
  font-size: 15px;
`;

export default GameStatus;
