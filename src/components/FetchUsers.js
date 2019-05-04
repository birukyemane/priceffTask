import React, {Component} from 'react';
import axios from 'axios';
import { UsersList } from '../containers/UsersList'

class FetchUsers extends Component {
    fetch = () => {
        const dispatchUsers = this.props.dispatchUsers;
        const dispatchStat = this.props.dispatchStat;
        axios.get('https://randomuser.me/api/?results=500')
        .then(function (response) {
            // handle success
            dispatchUsers(response.data.results);
            let averageAge = 25, oldestPerson = 50;
            dispatchStat({averageAge, oldestPerson})
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    render () {
        return (
            <div>
                <button type="button" onClick= {this.fetch}> Fetch users </button>
                <UsersList />
            </div>            
        );    
    }
}

export default FetchUsers;