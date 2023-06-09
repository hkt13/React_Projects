import { useState } from 'react'
import './App.css'

function App() {
  const [name, setname] = useState("")
  const [age, setage] = useState(0)
  const [height, setheight] = useState(0)
  const [superpower, setsuperpower] = useState("")
  const [display, setdisplay] = useState(false)

  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div>
      <label>name:</label>
      <input type="text" style={{margin:10}} onChange={(e)=>{
        setname(e.target.value)
      }}/>
  
      <label>age:</label>
      <input type="number" style={{margin: 10}} onChange={(e)=>{
        setage(e.target.value)
      }}/>
     
      <label>height:</label>
      <input type="number" style={{margin: 10}} onChange={(e)=>{
        setheight(e.target.value)
      }}/>

      <label>superpower:</label>
      <input type="text" style={{margin: 10}} onChange={(e)=>{
        setsuperpower(e.target.value)
      }}/>
      </div>
      <button onClick={()=> setdisplay(true)} style={{margin: 10}}>Display Info</button>
      <div>
        <h1>Hero Info</h1>
        {display && (
          <ul className='ul'>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>height: {height}</li>
            <li>superpower: {superpower}</li>
          </ul>          
        )}
      </div>
    </div>
  )
}

export default App
