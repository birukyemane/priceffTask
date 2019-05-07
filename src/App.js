import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import { FetchUsers } from './containers/FetchUsers';
import AppBar from './components/AppBar';
import { API } from "aws-amplify";

class App extends Component {
  async componentDidMount(){
    try {
      const stats = await this.stats();
      console.log(stats)
    } catch (e) {
      alert('geting stat history error', e);
    }
  }

  stats() {
    return API.get("priceffTask", "/stats");
  }

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
