import React from "react";
import earthlogo from '../imgs/earth.png'


function Navbar(){
    return(
        <nav className="nav-bar">
              <img className="nav-bar-earthlogo" src={earthlogo}/>
              <h3 className="nav-bar-title"> my travel journal</h3>


         
        </nav>
    )
}

export default Navbar