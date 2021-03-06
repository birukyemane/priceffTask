import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { FetchUsers } from './containers/FetchUsers';
import AppBar from './components/AppBar';
import { API } from "aws-amplify";
import { StatsList } from './containers/StatsList';

class App extends Component {
  async componentDidMount(){
    try {
      const { stats } = await this.stats();
      this.props.dispatchStatsHistory(stats);
    } catch (e) {
      alert('geting stat history error', e);
    }
  }

  stats() {
    return API.get("priceffTask", "/stats");
  }

  render () {
   return ( 
    <div>        
       <Router>
        <AppBar /> 
        <Route exact path='/' render={(props)=><Redirect to='/users' />} />
        <Route  path='/users' component={FetchUsers}/>   
        <Route  path='/stats' component={StatsList}/>    
      </Router> 
      <footer></footer>
    </div>
   );
  }
}

export default App;
