import { useContext, useState } from 'react'
import './App.css'
import Menu from './components/menu'
import { gameStateContext } from "./helpers/context";
import Quiz from './components/quiz';
import End from './components/End';

function App() {
  const [gameState, setgameState] = useState('menu')
  const [userName, setUserName] = useState('')
  const [score, setscore] = useState(0)
  return (
    <div className="App">
      <h1>Quiz app</h1>
      <gameStateContext.Provider value={{ gameState, setgameState, userName, setUserName, score, setscore }}>
        {gameState === 'menu' && <Menu />}
        {gameState === 'playing' && <Quiz />}
        {gameState==='end'&& <End/> }
      </gameStateContext.Provider>

    </div>
  )
}

export default App
