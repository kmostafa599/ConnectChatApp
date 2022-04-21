import { Avatar } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { useFormik } from 'formik'
import SendIcon from '@mui/icons-material/Send';
import ChatHeader from './ChatHeader';
import {io} from "socket.io-client";
import { send } from 'process';
import { sendMessage } from '../api';

function Chat() {
  const [yourID, setYourID] = useState();
  const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState("");
  const [socket,setSocket] = useState(null)

  
  useEffect(()=>{
    const socket = io('http://localhost:7070')

    socket.on("your id", (id : string )=>{
      setYourID(id)
    })
    socket.on("message",(message:string)=>{
      receivedMessage(message);

    })
  },[])
  function receivedMessage(message) {
    setMessages((oldMsgs : string) => [...oldMsgs, message]);
  }

  const initialValues = {
    reply:''
  }
  const formik = useFormik({

    initialValues,
    onSubmit: async values => {
      await sendMessage(values.reply,values.userId)
      // setMessages()
      console.log(values)
      socket.emit("send message",values)

    }

  })

  return (
    <div className='chatBox-container'>
        <ChatHeader />
        <div className='chat-header'>
            <Avatar/>
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
              <SendIcon/>
            </span>
          </button>
        </form>
    </div>
  )
}

export default Chat
