import { useEffect, useState } from 'react'
import './App.css'
import Game from './components/Game';
import LatestDeals from './components/LatestDeals';

function App() {
  const [gameTitle, setgameTitle] = useState('')
  const [ searchedgames, setsearchedgames] = useState([]);
  const [latestDeals, setlatestDeals] = useState([])

  const searchGame=()=>{
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
    .then(response => response.json())
    .then(data=> setsearchedgames(data))
  }

useEffect(()=>{
  fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3  `)
  .then(response => response.json())
  .then(data=> setlatestDeals(data))
},[])
  console.log(latestDeals)
  return (
    <div className="App">
      <section className="search-box">
        <h1>search for the game</h1>
        <input type="text" placeholder='minecraft...' onChange={(e)=>{setgameTitle(e.target.value)}} onKeyDown={(e)=>{
          if(e.target.value!=='')
          e.key==="Enter"&&searchGame();
        }}/>
        <button onClick={searchGame}>Search game title</button>
        <Game searchedgames={searchedgames}/>
      </section>
      <section className="deal-box">
        <h1>latest deals</h1>
        <LatestDeals latestDeals={latestDeals} />
      </section>
    </div>
  )
}

export default App