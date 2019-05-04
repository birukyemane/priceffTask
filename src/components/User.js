import React from "react"
import PropTypes from "prop-types"

const User = ({ user }) => (
  <p>
    {user.name.title} {user.name.first} {user.name.last} {user.gender} {user.dob.age} {user.location.coordinates.latitude}
  </p>
)

User.propTypes = {
  user: PropTypes.object.isRequired,
}

export default User;