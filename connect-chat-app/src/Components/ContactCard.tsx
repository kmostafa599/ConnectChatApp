import React from 'react'
import { Avatar } from '@mui/material';
import {Badge} from '@mui/material';
function ContactCard() {

  
  
  return (
    <div className='contactCard-container'>
        <div className='contactCard-profilePic'>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Badge>
        </div>
    </div>
  )
}

export default ContactCard