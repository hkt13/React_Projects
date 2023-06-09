import { useState, useRef } from 'react'
import './App.css'
function App() {
  const [list, setlist] = useState([])
  const [currenttask, setcurrenttask] = useState("")
  const inputtask = useRef(null)

  const addtask = () => {
    setlist([...list, { task: currenttask, iscomplete: false }])
    inputtask.current.value = "";
    //to clean the previous stored task
    setcurrenttask("")
  }

  const handledelete = (deleteitem) => {
    setlist(list.filter((item, index) => {
      return index !== deleteitem
    }))

  }

  const handlecomplete = (completeitem) => {
    setlist(list.map((item, index) => {
      return item.task == completeitem ? { task: completeitem, iscomplete: true } : item
    }))

  }
  return (
    <div className="App">
      <h1>todo list</h1>
      <div>
        <input type="text" placeholder='Task..' ref={inputtask} onChange={(e) => {
          setcurrenttask(e.target.value)
        }} onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (e.target.value !== "") {
              return addtask()
            }
          }
        }
        } />
        <button onClick={addtask}>Add task</button>
      </div>
      <hr />
      <ul>
        {list.map((item, index) => {
          return (

            <div className="list" key={index}>
              <li className="item">{item.task}</li>
              <button onClick={() => { handlecomplete(item.task) }}>Complete</button>
              <button onClick={() => { handledelete(index) }}>Delete</button>
              {item.iscomplete ? 'item completed' : 'item not completed'}
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default App
