import React from "react"
import PropTypes from "prop-types"

const StatItem = ({ statHistory }) => {
  console.log('stat history', statHistory)
  const {Stat}= statHistory;
  const {averageAge, oldestPerson, youngestPerson, northernMostPerson, southernMostPerson} = JSON.parse(Stat)
  return (
  <p>
     { oldestPerson.name.first}
    
  </p>
)
  }

StatItem.propTypes = {
  statHistory: PropTypes.object.isRequired,
}

export default StatItem;