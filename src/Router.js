import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Game from './components/Game/Game';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
