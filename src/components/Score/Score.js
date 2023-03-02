import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Score({ xPlayer, score, winData }) {
  const [xWin, setXWin] = useState(0);
  const [oWin, setOWin] = useState(0);

  const isWinner = score !== null;
  const isXPlayer = xPlayer && !isWinner;

  const countWinner = winData => {
    const xWon = winData.filter(winner => winner === 'X').length;
    const oWon = winData.filter(winner => winner === 'O').length;

    setXWin(xWon);
    setOWin(oWon);
  };

  useEffect(() => {
    countWinner(winData);
  }, [winData]);

  return (
    <ScoreContainer>
      <PlayerInfo>
        <Turn>
          {isXPlayer ? (
            <TurnImg src='/images/X.png' alt='X' />
          ) : (
            <TurnImg src='/images/Ellipse.png' alt='O' />
          )}
          Turn
        </Turn>
        <TurnCounts>
          <PlayerImg src='/images/Ellipse.png' alt='O' />
          {oWin}
        </TurnCounts>
        <TurnCounts>
          <PlayerImg src='/images/X.png' alt='X' />
          {xWin}
        </TurnCounts>
      </PlayerInfo>
    </ScoreContainer>
  );
}
const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 600px;
  border-radius: 30px;
`;

const PlayerInfo = styled.div`
  display: flex;
  width: inherit;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  font-size: 20px;
  font-weight: 600;
`;

const Turn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: rgb(233, 233, 233);
  gap: 25px;
  border-radius: 0 30px 0 30px;
`;

const TurnCounts = styled.div`
  display: flex;
  width: 200px;
  height: 80px;
  background-color: #e9e9e9;
  border-radius: 40px;
  text-align: center;
  align-content: center;
  align-items: center;
  justify-content: space-around;
`;

const TurnImg = styled.img`
  width: 80px;
  background-color: transparent;
`;

const PlayerImg = styled.img`
  width: 10%;
  background-color: transparent;
`;

export default Score;
