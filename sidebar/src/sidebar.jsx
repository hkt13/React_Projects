import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Sidebar=()=>{
const[show, setshow] = useState(false)

    return <div className='sidebar'>
       <div className={`info ${show && 'show'}`}>
        <div className="title">
            Harsh Thakur
        </div>
        <div className="cross" onClick={()=>{setshow(false)}}>
        <FontAwesomeIcon icon={faXmark} />
        </div>
        <ul className="list">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Projects</li>
        </ul>
        </div>        
      <div className='bar' onClick={()=>{setshow(!show)}}>
      <FontAwesomeIcon icon={faBars} />
      </div>
        
    </div>
}

export default Sidebar;