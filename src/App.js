import { useState } from "react";
import "./App.css";
import Employees from "./components/employees/Employees";
import Login from "./components/login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>{!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <Employees />}</>
    // <>
    //   <Login />
    //   <Employees />
    // </>
  );
}

export default App;
