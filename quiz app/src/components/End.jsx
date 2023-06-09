import { useContext } from "react";
import { gameStateContext } from "../helpers/context";
import questions from '../helpers/questions';

function End() {
    const { setgameState, score, setscore, userName} = useContext(gameStateContext)

return <div className="end">
      <h1>{userName}</h1>
      <h2>Your score is {score}/{questions.length}</h2>
      <button className="start" onClick={()=>{
        setscore(0)
        setgameState('menu')
        }}>Restart</button>
    </div>
}

export default End;