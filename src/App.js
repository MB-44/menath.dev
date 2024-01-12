import './App.css';
import { ColorSchemeProvider } from '@mantine/core';
import HomePage from './pages/home';

function App() {
  return (
    <ColorSchemeProvider>
      <HomePage/>
    </ColorSchemeProvider>
  );
}

export default App;
