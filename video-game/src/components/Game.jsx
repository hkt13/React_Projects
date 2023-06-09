import '../App.css'

const Game=({searchedgames})=>{
    console.log(searchedgames)
    return <div className="display-box">
    {searchedgames.map((game, id)=>{
       return <div className="game" key={id}>
            <h4>{game.external}</h4>
            <img src={game.thumb} alt="" />
           <h5>${game.cheapest}</h5> 
        </div>
    })}
    </div>
}

export default Game;