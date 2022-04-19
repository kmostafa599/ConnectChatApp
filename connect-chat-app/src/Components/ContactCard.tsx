import React, { Fragment } from 'react'
import { Avatar } from '@mui/material';
function ContactCard() {

  
  return (
    <Fragment>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className='contactCard-avatar'/>
        <div className='contactCard-info'>
            <p className='contacrCard-name'>Contact's name</p>
            <p className='contactCard-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='contactCard-date'>date</p>
    </Fragment>
  )
}

export default ContactCard