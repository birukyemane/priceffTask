import React from "react"
import PropTypes from "prop-types"
import User from "./User"

const UserList = ({ users }) => (
  <section id="messages-list">
    <ul>
    {users.map(message => (
      <User
      key={message.id}
      {...message}
      />
    ))}
    </ul>
  </section>
)

UserList.propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        gender: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }
  
  export default UserList;