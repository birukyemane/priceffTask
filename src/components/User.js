import React from "react"
import PropTypes from "prop-types"

const User = ({ name, gender }) => (
  <p>
    <i>{name}</i>: {gender}
  </p>
)

User.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
}

export default User;