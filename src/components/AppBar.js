import React from "react"
import { NavLink } from 'react-router-dom';

const AppBar = () => (
  <header className="flex-row full-width primary--background">
    <ul>
        <li className="inline margin"><NavLink className="white-text" to='/users' >Random users</NavLink></li>            
        <li className="inline margin"><NavLink className="white-text" to='/stats' >Saved stats</NavLink></li>
    </ul>
  </header>
)

export default AppBar;