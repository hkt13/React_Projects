import { useState } from 'react';
import './App.css'
const Navbar=()=>{
const [show,setshow] = useState(false)

const showbar=()=>{
setshow(!show)
}

    return <>
    <nav>
        <div className={`header ${show && 'active'}`}>
       <h1 className="title">
        Harsh Thakur
       </h1>
       <ul className="options">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Projects</a></li>
        </ul>
        <div className="bar" onClick={showbar}>
            +
            
        </div>
        </div>
    </nav>
    </>
}

export default Navbar;