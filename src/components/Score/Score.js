import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Score({ xPlayer, score, handleRefreshClick }) {
  const isWinner = score !== null;
  const isXPlayer = xPlayer && !isWinner;
  const isOPlayer = !xPlayer && !isWinner;

  return (
    <ScoreContainer>
      <PlayerInfo>
        {isWinner ? (
          <Winner>
            <Trophy>🏆</Trophy>
            <PlayerImg
              src={score === 'X' ? '/images/X.png' : '/images/Ellipse.png'}
              alt={score}
            />
            <Status>Winner!</Status>
          </Winner>
        ) : (
          <>
            <PlayerImg src='/images/X.png' alt='X' show={isXPlayer} />
            <PlayerImg src='/images/Ellipse.png' alt='O' show={isOPlayer} />
            <Status>{isXPlayer ? 'Turn' : 'Turn'}</Status>
          </>
        )}
      </PlayerInfo>
      <ButtonContainer>
        <NewGame onClick={handleRefreshClick}>New Game</NewGame>
        <StyledLink to='/'>
          <HomeBtn>Home</HomeBtn>
        </StyledLink>
      </ButtonContainer>
    </ScoreContainer>
  );
}

const StyledLink = styled(Link)`
  width: inherit;
`;

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
`;

const Winner = styled.div`
  width: 250px;
  height: 300px;
  background-color: rgb(233, 233, 233);
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  border-radius: 20px 20px 0 0;
`;

const PlayerImg = styled.img`
  width: auto;
  height: 108px;
  background-color: transparent;
  display: ${({ show }) => (show ? 'block' : 'none')};
`;

const Trophy = styled.p`
  font-size: 60px;
`;

const Status = styled.p`
  font-size: 40px;
  background-color: transparent;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  background-color: transparent;
  gap: 30px;
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

const HomeBtn = styled.button`
  &:hover {
    background-color: #78bd65;
  }
  width: inherit;
  height: 70px;
  border-radius: 50px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: 600;
  background-color: #e9e9e9;
`;

export default Score;
