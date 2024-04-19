import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <>
      <Login setIsLoggedIn={setIsLoggedIn}/>
      </>
  );
}

export default App;
