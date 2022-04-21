import { Avatar } from '@mui/material'
import {useEffect, useState, useRef} from 'react'
import { useFormik } from 'formik'
import SendIcon from '@mui/icons-material/Send';
import ChatHeader from './ChatHeader';
function Chat() {
  //the input field will change message content through the submit handler
  //the chat window will be updated upon li click , to post the user.name, user.conversation, if user id === authedUser id ? className sent, : className recieved

  const initialValues = {reply:''}
  const formik = useFormik({

    initialValues,onSubmit: values => {
      console.log(values)
    }

  })

  return (
    <div className='chatBox-container'>
        <ChatHeader/>
        <div className='chat-header'>
            <Avatar/>
            <p>Contact's Name</p>
        </div>
        <div className='chat-box'>
          <ul className='box-conversation'>
            <li className='sent'>
              hello there , how are you hope all is well , bla bla bla
            </li>
            <li className='sent'>
              hello there , how are you hope all is well , bla bla bla
            </li>
            <li className='recieved' >
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
