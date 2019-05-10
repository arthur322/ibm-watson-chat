import React from 'react'

import './styles.scss'

const Input = props => {
  return (
    <input
      type="text"
      name="message"
      className="input-message"
      onChange={props.onChange}
      onKeyPress={props.onKeyPress}
    />
  )
}

export default Input
