import React from "react"
import PropTypes from 'prop-types'

const Card = ({ name, surname }) => {
  return (
    <div>
      <h1>{`Hello ${surname}`}</h1>
    </div>
  )
}

export default Card

Card.propTypes = {
  surname: PropTypes.string.isRequired,
}
