import React, {Component} from 'react';
import axios from 'axios';
import { UsersList } from '../containers/UsersList';
import { Stat } from '../containers/Stat';
import {averageAge, oldestPerson, youngestPerson, northernMostPerson, southernMostPerson} from '../utilities/statistics';

class FetchUsers extends Component {
    fetch = () => {
        const dispatchUsers = this.props.dispatchUsers;
        const dispatchStat = this.props.dispatchStat;
        axios.get('https://randomuser.me/api/?results=500')
        .then(function (response) {
            // handle success
            let users = response.data.results
            dispatchUsers(users);
            dispatchStat({
                averageAge: averageAge(users), 
                oldestPerson: oldestPerson(users), 
                youngestPerson: youngestPerson(users),
                northernMostPerson: northernMostPerson(users),
                southernMostPerson:southernMostPerson(users),
                isSaved: false
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
                <button className="button-primary  margin " type="button" onClick= {this.fetch}> Calculate </button>
                <Stat history={this.props.history}/>
                <UsersList />
            </div>            
        );    
    }
}

export default FetchUsers;