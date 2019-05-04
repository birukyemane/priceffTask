import React, {Component} from 'react';
import axios from 'axios';
import { UsersList } from '../containers/UsersList';
import {averageAge, oldestAge, youngestAge, northernMostPerson, southernMostPerson} from '../utilities/statistics';

class FetchUsers extends Component {
    fetch = () => {
        const dispatchUsers = this.props.dispatchUsers;
        const dispatchStat = this.props.dispatchStat;
        axios.get('https://randomuser.me/api/?results=10')
        .then(function (response) {
            // handle success
            let users = response.data.results
            dispatchUsers(users);
            dispatchStat({
                averageAge: averageAge(users), 
                oldestAge: oldestAge(users), 
                youngestAge: youngestAge(users),
                northernMostPerson: northernMostPerson(users),
                southernMostPerson:southernMostPerson(users)
            });
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