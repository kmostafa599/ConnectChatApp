import React from 'react'
import { Avatar } from '@mui/material';
import {Badge} from '@mui/material';
function ContactCard() {

  
  
  return (
    <div className='contactCard-container'>
        <div className='contactCard-profilePic'>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Badge>
        </div>
        <div className='contactCard-info'>
            <p className='contacrCard-name'>Contact's name</p>
            <p className='contactCard-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab quia dolorum amet porro facere. Cupiditate, est quasi itaque necessitatibus at numquam, perferendis blanditiis inventore deserunt accusantium esse ex. Omnis, atque.</p>
        </div>
    </div>
  )
}

export default ContactCard