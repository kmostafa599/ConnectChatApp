import { Avatar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import SendIcon from '@mui/icons-material/Send';
import ChatHeader from './ChatHeader';
import { io } from "socket.io-client";
import { send } from 'process';
import { sendMessage } from '../api';
interface Provider {
  message: string
}
function Chat({ back }: { back: () => void }) {
  const [yourID, setYourID] = useState<string>('');
  const [messages, setMessages] = useState<Provider[]>([]);
  // const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null)
  const goBack = back

  useEffect(() => {
    
    const socket = io('http://localhost:7070')
    socket.on("your id", (id: string) => {
      setYourID(id)
    })
    socket.on("message", (message: Provider) => {
      receivedMessage(message);

    })
  }, [])
  function receivedMessage(message: Provider) {
    setMessages([...messages, message]);
  }

  const initialValues = {
    reply: ''
  }
  const formik = useFormik({

    initialValues,
    onSubmit: async values => {
      await sendMessage(values.reply)
      // setMessages()
      console.log(values)
      if(socket) {
        socket.emit("send message", values)
      }

    }

  })

  return (
    <div className='chatBox-container'>
      <ChatHeader 
        goBack={goBack}
      />
      <div className='chat-header'>
        <Avatar />
        <p>Contact's Name</p>
      </div>
      <div className='chat-box'>
        <ul className='box-conversation'>
          <li >
            hello there , how are you hope all is well , bla bla bla
          </li>
        </ul>
      </div>
      <form className='chat-input' onSubmit={formik.handleSubmit}>
        <input
          id='reply'
          onInput={formik.handleChange}
          value={formik.values.reply}
          placeholder="type your message here."
        />
        <button type='submit' className='chat-send'>
          <span>
            <SendIcon />
          </span>
        </button>
      </form>
    </div>
  )
}

export default Chat
