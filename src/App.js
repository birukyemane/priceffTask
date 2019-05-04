import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { FetchUsers } from './containers/FetchUsers';
import AppBar from './components/AppBar';

class App extends Component {
  
  render () {
   return ( 
    <div className="flex-column">        
       <Router>
        <AppBar /> 
        <Route exact path='/' render={(props)=><Redirect to='/users' />} />
        <Route  path='/users' component={FetchUsers}/>      
      </Router> 
      <footer></footer>
    </div>
   );
  }
}

export default App;
