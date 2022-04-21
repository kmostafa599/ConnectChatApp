import React from 'react'
import { Avatar } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
function ChatHeader() {
  return (
    <div className='contacts-header'>
        <div className='header-contact-id'>
          <ArrowBackIosIcon/>
          <Avatar/>
          <h1>Contact's Name</h1>
        </div>
    </div>
  )
}

export default ChatHeader