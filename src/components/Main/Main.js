import React from 'react';
import MainTitle from './MainTitle';
import theme from '../../styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        {MainTitle.map((item, index) => (
          <Grid key={index}>{item}</Grid>
        ))}
        <Link to='/game'>
          <PlayGameBtn>Let's Play!</PlayGameBtn>
        </Link>
      </MainContainer>
    </ThemeProvider>
  );
}

const MainContainer = styled.div`
  @media ${({ theme }) => theme.device.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }

  width: 1920px;
  height: 1080px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: 0px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const Grid = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.4);
  width: 19rem;
  height: 19rem;
  padding: 20px;
  text-align: left;
  font-weight: 700;
  font-size: 100px;
  align-items: center;
  display: grid;
`;

const PlayGameBtn = styled.button`
  align-items: center;
  border: 3px solid black;
  border-radius: 50px;
  width: 300px;
  height: 70px;
  background-color: #e9e9e9;
  font-size: 25px;
  font-weight: 800;
  position: fixed;
  left: 45%;
  bottom: 16%;
  z-index: 999999;
`;

export default Main;
