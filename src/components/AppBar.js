import React from "react"
import { NavLink } from 'react-router-dom';

const AppBar = () => (
  <header className="app-bar full-width primary--background">
   
      <ul>
          <li className="inline margin"><NavLink className="white-text" to='/users' >Fetch Users</NavLink></li>            
          <li className="inline margin"><NavLink className="white-text" to='/stats' >Saved Stats</NavLink></li>
      </ul>
   
  </header>
)

export default AppBar;