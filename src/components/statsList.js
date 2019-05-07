import React from "react"
import PropTypes from "prop-types"
import StatItem from "./StatItem"

const StatsList = ({ statsHistory }) => {
  let header =  <div className="flex-column" >
  <div className="margin">{`${statsHistory.length} saved statistics data are found`}</div>   
</div>;
header = (statsHistory.length>0 ? header:'');
statsHistory = statsHistory.map((statHistory,index) => <StatItem key={index + 1}  statHistory={statHistory}/>);
return <div >{header}{statsHistory}</div>;     
}

StatsList.propTypes = {
    statsHistory: PropTypes.arrayOf(
        PropTypes.object.isRequired
    ).isRequired
  }
  
export default StatsList;