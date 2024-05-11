import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { useState } from 'react';
import {ThemeContext} from "./context/ThemeContext"

function App() {
  const [theme, setTheme]= useState("dark")
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={` ${theme}
      ${theme==='dark' ? 'bg-[#121212] ':null }`}>
      <Header/>
        <Home/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
