import React from 'react';
import { ColorSchemeProvider } from '@mantine/core';
import HomePage from './pages/home';
import './App.css';

function App() {
  return (
    <ColorSchemeProvider>
      <HomePage/>
    </ColorSchemeProvider>
  );
}

export default App;