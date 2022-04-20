import React, {useState} from 'react'
import Contacts from '../Components/Contacts'
import Chat from '../Components/Chat'
import { boolean } from 'yup/lib/locale'
import {Toggler} from '../types/functions'
function HomePage() {

    //mobile view - chat/contacts toggle
    const [chatMode, setChatMode] = useState(false)
    const viewChat = () =>{
        setChatMode(true)
    }
    const back = () => {
        setChatMode(false)
    }
  return (
    <div className='homePage-wrapper'>
        <div className='homePage-mobile'>
            <div className={chatMode? 'hide' : 'mobile-contacts'}>
                <Contacts
                //   viewChat={viewChat}
                />
            </div>
            <div className={chatMode? 'mobile-chat' : 'hide'}>
                <Chat/>
            </div>
        </div>
        <div className='homePage-pc'>
            <div className='pc-contacts'>
                <Contacts/>
            </div>
            <div className='pc-chatBox'>
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default HomePage