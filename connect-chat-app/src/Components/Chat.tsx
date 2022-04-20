import { Avatar } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik'
import SendIcon from '@mui/icons-material/Send';
function Chat() {

  const initialValues = {reply:''}
  const formik = useFormik({

    initialValues,onSubmit: values => {
      console.log(values)
    }

  })

  return (
    <div className='chatBox-container'>
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
