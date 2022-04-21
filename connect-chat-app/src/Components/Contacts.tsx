import React from 'react'
import ContactCard from './ContactCard'
import ContactsHeader from './ContactsHeader'
function Contacts() {

  //

  return (
    <div className='contacts-container'>
        <ContactsHeader/>
        <h2 className='contacts-title'>Messages</h2>
        <div className='contacts-scroll'>
          <ul className='contacts-list'>
            <li>
              <ContactCard/>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Contacts