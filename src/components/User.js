import React from "react"
import PropTypes from "prop-types"

const User = ({ user }) => (
  <div className="flex-column">
    <div className="flex-row margin">
      <div className="users-title users-info">{user.name.title} {user.name.first} {user.name.last}</div>
      <div className="users-title users-info">{user.dob.age}</div>
      <div className="users-title users-info"> {user.gender}</div>
      <div className="users-title users-info">{user.location.city}</div> 
      <div className="users-title users-info">{user.location.state}</div> 
   </div>
  </div>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User;