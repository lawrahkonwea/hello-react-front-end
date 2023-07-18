import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Greeting />} path="/" />
      </Routes>
    </>
  );
}

export default App;
