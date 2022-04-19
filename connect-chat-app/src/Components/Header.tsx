import React from 'react'
import {ReactComponent as Logo} from '../assets/logo.svg'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-logo'>
            <Logo/>
        </div>
        <h1 className='header-title'>
            <span className='ltBlue'>Conn</span><span className='tq'>ect</span>
        </h1>
    </div>
  )
}
 
export default Header