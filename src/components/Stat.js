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
    <div>
         <p>
    {averageAge} {oldestPerson.name.first} {youngestPerson.name.first} {northernMostPerson.name.first} {southernMostPerson.name.first}
     </p>
     <button onClick={e=>handleSave(stat,dispatchAddStat)}>Save</button>
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