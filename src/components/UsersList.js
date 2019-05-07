import React from "react"
import PropTypes from "prop-types"
import User from "./User"

const UserList = ({ users }) => {
    let header =  <div className="flex-column">
      <div className="margin success">{`${users.length} users fetched`}</div>
       <div className="flex-row margin">
        <div className="users-title">Name</div>
        <div className="users-title">Age</div>
        <div className="users-title">Sex</div>
        <div className="users-title">City</div>
        <div className="users-title">City</div>
      </div>
    </div>;
    header = (users.length>0 ? header:'');
    users = users.map((user,index) => <User key={index + 1} user={user}/>);
    return <div >{header}{users}</div>;
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.shape({
          first:PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          last: PropTypes.string.isRequired
        }).isRequired,
        gender: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }
  
export default UserList;