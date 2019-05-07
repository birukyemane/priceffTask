import React from "react";
import PropTypes from "prop-types";
import { API } from "aws-amplify";

const handleSave = async event => {
  try {
    await createNote({"PickupLocation":{"Latitude":47.6174755835663,"Longitude":-122.28837066650185}});
  } catch (e) {
    alert(e);
  }
}

const createNote = (note)=> {
  return API.post("priceffTask", "/createstat", {
    body: note
  });
}


const Stat = ({ stat }) => {
  if(Object.keys(stat).length!==0){
    const {averageAge, oldestPerson, youngestPerson, northernMostPerson ,southernMostPerson} = stat;
    return (
    <div>
         <p>
    {averageAge} {oldestPerson.name.first} {youngestPerson.name.first} {northernMostPerson.name.first} {southernMostPerson.name.first}
     </p>
     <button onClick={handleSave}>Save</button>
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