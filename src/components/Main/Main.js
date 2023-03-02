import React from 'react';
// import MainTitle from './MainTitle';
// import theme from '../../styles/theme';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import back from '../../../public/images/Background.jpg';

function Main() {
  return (
    // <ThemeProvider>
    <MainContainer>
      {/* <Background></Background> */}
      {/* {MainTitle.map((item, index) => (
          <Grid key={index}>{item}</Grid>
        ))} */}
      <Link to='/game'>
        <PlayGameBtn>Let's Play!</PlayGameBtn>
      </Link>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: url('images/Background.jpeg');
  object-fit: cover;
  background-size: cover;
  position: relative;
  justify-content: center;
  align-items: flex-end;
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
  margin-bottom: 200px;
  z-index: 999999;
`;

export default Main;
