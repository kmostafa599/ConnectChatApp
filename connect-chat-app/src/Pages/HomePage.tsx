import React, {useEffect, useState} from 'react'
import Contacts from '../Components/Contacts'
import Chat from '../Components/Chat'
import { RootState } from '../reducer/store'
import app, { setConversations } from '../reducer/app'
import { getConversation } from '../api'
import { useDispatch, useSelector } from 'react-redux'
// import { useAppDispatch, useAppSelector } from '../reducer/hooks'

function HomePage():JSX.Element {
    const data = useSelector((state: RootState)=>state)
    const authUser = data.app.user
    const conversations = data.app.conversation
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
        if (authUser){
            const response = listConversations(authUser.id) //authedUuser
        
        dispatch(setConversations(response))
        }
        
    }, [])

    return (
        <div className='homePage-wrapper'>
            <div className='homePage-mobile'>
                <div className={chatMode ? 'hide' : 'mobile-contacts'}>
                    <Contacts
                        conversations={conversations}
                    />
                </div>
                <div className={chatMode ? 'mobile-chat' : 'hide'}>
                    <Chat
                        back={back}
                    />
                </div>
            </div>
            <div className='homePage-pc'>
                <div className='pc-contacts'>
                    <Contacts 
                        conversations={conversations}
                    />
                </div>
                <div className='pc-chatBox'>
                    <Chat 
                        back={back}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage