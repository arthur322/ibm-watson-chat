import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import './styles.css'

import Balaos from './components/Balao'
import ChatBox from './components/ChatBox'
import Input from './components/Input'

function App() {
  const [chats, setChats] = useState([
    { from: 'user', text: 'Inicie digitando alguma mensagem!' }
  ])
  const [context, setContext] = useState({})
  const [actualMessage, setActualMessage] = useState('')

  useEffect(() => {
    const lastMessage = chats[chats.indexOf(chats[chats.length - 1])]

    if (lastMessage.from === 'user') {
      axios
        .post(`${process.env.BACKEND_SERVER_URL}/message`, {
          text: actualMessage,
          context
        })
        .then(({ data }) => {
          setContext(data.context)
          setChats([...chats, { from: 'watson', text: data.output.text[0] }])
        })
        .catch(err => {
          console.log(err.message)
          setChats([...chats, { from: 'watson', text: err.message }])
        })
    }
  }, [chats])

  const handleSendMessage = event => {
    const textToSend = event.target.value
    if (event.key === 'Enter') {
      event.target.value = ''
      const userChat = { from: 'user', text: textToSend }

      setActualMessage(textToSend)
      setChats([...chats, userChat])
    }
    const element = document.getElementsByClassName('balao')[0]
    element.scrollTo(0, element.offsetHeight)
  }

  return (
    <div className="App">
      <ChatBox className="box">
        <Balaos>
          {chats.map((chat, index) => (
            <p className={chat.from} key={index}>
              {chat.text}
            </p>
          ))}
        </Balaos>
        <Input onKeyPress={handleSendMessage} />
      </ChatBox>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
