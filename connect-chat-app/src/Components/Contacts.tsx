import React from 'react'
import ContactCard from './ContactCard'
import ContactsHeader from './ContactsHeader'
function Contacts() {

  //assign contact to chat with + set chatMode true
  //recieve users via useSelector
  //state of the message content is to be passed to the cards to recieve the content that will change through the input field submit handler

  return (
    <div className='contacts-container'>
        <ContactsHeader/>
        <h2 className='contacts-title'>Messages</h2>
        <div className='contacts-scroll'>
          <ul className='contacts-list'>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
            <li>
              <ContactCard/>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Contacts