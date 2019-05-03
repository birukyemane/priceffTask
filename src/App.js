import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  
  render () {
   return ( 
    <div className="container">   
      <header></header>  
      <Router>
        <Route exact path='/' component={Home} />
        <Route  path='/fetch' render={(props)=><FetchUsers {...props} />}/>      
      </Router> 
      <footer></footer>
    </div>
   );
  }
}

export default App;
