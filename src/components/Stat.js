import React from "react";
import PropTypes from "prop-types";
import { API } from "aws-amplify";

const handleSave = async (stat, dispatchAddStat) => {
  try {
   let result = await createStat(JSON.stringify(stat));
   dispatchAddStat(result);
  } catch (e) {
    alert(e);
  }
}

const createStat = (note)=> {
  return API.post("priceffTask", "/createstat", {
    body: note
  });
}

const Stat = ({ stat, dispatchAddStat }) => {
  if(Object.keys(stat).length!==0){
    const {averageAge, oldestPerson, youngestPerson, northernMostPerson ,southernMostPerson} = stat;
    return (
    <div className="flex-column ">
      <h3 className="margin">Fetched Users Statistics</h3>
      <div className="flex-row margin">         
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
    <div><button className="button-primary  saveButton margin" onClick={e=>handleSave(stat,dispatchAddStat)}>Save</button></div>
    </div>
   )
  }else {
    return <p></p>
  }  
}

Stat.propTypes = {
  stat: PropTypes.object.isRequired,
}

export default Stat;