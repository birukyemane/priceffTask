import React from "react"
import PropTypes from "prop-types"

const StatItem = ({ statHistory }) => {
  const {Stat}= statHistory;
  const {averageAge, oldestPerson, youngestPerson, northernMostPerson, southernMostPerson} = JSON.parse(Stat)
  return (
    <div className="flex-column">
         <div className="flex-row">         
            <div className="flex-row ">
              <div className="stat-title">Average Age :</div>
              <div className="stat-info">{averageAge}</div> 
            </div>
            <div  className="flex-row ">
              <div className="stat-title"> Youngest person :</div>
              <div className="stat-info">{youngestPerson.dob.age} years,</div>
              <div className="stat-info">{youngestPerson.name.first}  {youngestPerson.name.last}</div>
            </div>
            <div  className="flex-row ">
              <div className="stat-title">Oldest person : </div>
              <div className="stat-info">{oldestPerson.dob.age} years,</div>
              <div className="stat-info">{oldestPerson.name.title}  {youngestPerson.name.first}  {youngestPerson.name.last}</div> 
            </div>         
            <div  className="flex-row ">
              <div className="stat-title">Northern Most person : </div>
              <div className="stat-info">City : {northernMostPerson.location.city},</div>
              <div className="stat-info"> {northernMostPerson.name.title} {northernMostPerson.name.first} {northernMostPerson.name.last}</div>
            </div>
            <div  className="flex-row ">
              <div className="stat-title">Southern Most person :</div>
              <div className="stat-info">City : {southernMostPerson.location.city},</div>
              <div className="stat-info"> {southernMostPerson.name.title} {southernMostPerson.name.first} {southernMostPerson.name.last}</div>
            </div>                     
    </div>     
    </div>
  );
  }

StatItem.propTypes = {
  statHistory: PropTypes.object.isRequired,
}

export default StatItem;