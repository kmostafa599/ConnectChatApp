import React from 'react'
import { Avatar } from '@mui/material'
function ChatHeader() {
  return (
    <div className='contacts-header'>
        <div className='header-contact-id'>
            <Avatar/>
            <h1>Contact's Name</h1>
        </div>
    </div>
  )
}

export default ChatHeader