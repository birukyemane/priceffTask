import React from "react"
import PropTypes from "prop-types"
import User from "./User"

const UserList = ({ users }) => (
  <section id="messages-list">
    <ul>
      {users.map((user,index) => (
        <User
        key={index + 1}
        user={user}
        />
      ))}
    </ul>
  </section>
)

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