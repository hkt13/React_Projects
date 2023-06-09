import '../App.css'
import { gameStateContext } from "../helpers/context";
import { useContext } from "react";

function Menu() {

    //global state value
    const {gameState, setgameState, userName, setUserName} = useContext(gameStateContext)
        return <div className="menu">
        <input type="text" placeholder='E.x. John smilga' onChange={(e)=>{ setUserName(e.target.value)}}/>
        <button className='start' 
        onClick={()=>{setgameState('playing')}}
        >Start</button>
    </div>
}

export default Menu;