import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import FetchUsers from './components/FetchUsers'

class App extends Component {
  
  render () {
   return ( 
    <div className="container">   
      <header></header>  
       <Router>
        <Route exact path='/' render={(props)=><Redirect to='/users' />} />
        <Route  path='/users' render={(props)=><FetchUsers {...props} />}/>      
      </Router> 
      <footer></footer>
    </div>
   );
  }
}

export default App;
