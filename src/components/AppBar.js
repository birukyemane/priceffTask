import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AppBar extends Component {

  state = {
    usersClassName: '',
    statsClassName: ''
  }

  render (){
    const { match, location, history } = this.props;
    if(location.pathname =='/users') {
      this.usersClassName = 'activeMenu';
      this.statsClassName = 'white-text';
    } else {
      this.usersClassName = 'white-text';
      this.statsClassName = 'activeMenu'
    }

    return  (
      <header className="app-bar full-width primary--background">   
          <ul>
              <li className="inline margin ">
              <NavLink className={this.usersClassName} to='/users' >Calculate Statistics</NavLink></li>            
              <li className="inline margin">
              <NavLink className={this.statsClassName} to='/stats' >Saved Statistics</NavLink></li>
          </ul>    
      </header>
    )
  }
}
export default withRouter(AppBar);