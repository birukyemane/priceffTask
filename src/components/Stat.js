import React from "react"
import PropTypes from "prop-types"

const Stat = ({ stat }) => {
  if(Object.keys(stat).length!==0){
    const {averageAge, oldestPerson, youngestPerson, northernMostPerson ,southernMostPerson} = stat;
    return (<p>
    {averageAge} {oldestPerson.name.first} {youngestPerson.name.first} {northernMostPerson.name.first} {southernMostPerson.name.first}
     </p>)
  }else {
    return <p></p>
  }  
}

Stat.propTypes = {
  stat: PropTypes.object.isRequired,
}

export default Stat;