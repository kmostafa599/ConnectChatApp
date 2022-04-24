import React, { useEffect } from 'react'
import ContactCard from './ContactCard'
import ContactsHeader from './ContactsHeader'
function Contacts({conversations}:{conversations: string[]}) {
// useEffect(()=>{
  
// })
  //assign contact to chat with + set chatMode true
  //recieve users via useSelector
  return (
    <div className='contacts-container'>
        <ContactsHeader/>
        <h2 className='contacts-title'>Messages</h2>
        <div className='contacts-scroll'>
          <ul className='contacts-list'>
            {
              <li>
                <ContactCard/>
              </li>
            }
          </ul>
        </div>
    </div>
  )
}

export default Contacts