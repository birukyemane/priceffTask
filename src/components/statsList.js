import React from "react"
import PropTypes from "prop-types"
import StatItem from "./StatItem"

const StatsList = ({ statsHistory }) => (
  <section id="messages-list">
    <ul>
      {statsHistory.map((statHistory,index) => (
        <StatItem
        key={index + 1}
        statHistory={statHistory}
        />
      ))}
    </ul>
  </section>
)

StatsList.propTypes = {
    statsHistory: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired
  }
  
export default StatsList;