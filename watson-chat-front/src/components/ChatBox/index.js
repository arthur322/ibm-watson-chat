import React from 'react'

import './styles.scss'

const ChatBox = props => {
  return <div className="chatbox">{props.children}</div>
}

export default ChatBox
