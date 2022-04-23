import React, {useEffect, useState} from 'react'
import Contacts from '../Components/Contacts'
import Chat from '../Components/Chat'
import { boolean } from 'yup/lib/locale'
import {Toggler} from '../types/functions'
import { RootState } from '../reducer/store'
import { setConversations } from '../reducer/app'
import { getConversation } from '../api'
import { useDispatch, useSelector } from 'react-redux'
function HomePage():JSX.Element {

    //mobile view - chat/contacts toggle
    const [chatMode, setChatMode] = useState(true)
    const dispatch = useDispatch()

    const viewChat = () =>{
        setChatMode(true)
    }
    const back = () => {
        setChatMode(false)
    }
     const listConversations = async (userId:string) => {
        const res = await getConversation(userId)
        return res
        
    }
 
    useEffect(() => {
        const response = listConversations(userId) //authedUuser
        dispatch(setConversations(response))
    }, [])

    const conversations = useSelector((state:RootState)=>state)

    return (
        <div className='homePage-wrapper'>
            <div className='homePage-mobile'>
                <div className={chatMode ? 'hide' : 'mobile-contacts'}>
                    <Contacts
                    />
                </div>
                <div className={chatMode ? 'mobile-chat' : 'hide'}>
                    <Chat
                    // back={back}
                    />
                </div>
            </div>
            <div className='homePage-pc'>
                <div className='pc-contacts'>
                    <Contacts />
                </div>
                <div className='pc-chatBox'>
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default HomePage