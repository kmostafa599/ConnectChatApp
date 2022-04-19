import React, { Fragment } from 'react'
import Contacts from '../Components/Contacts'
function HomePage() {

    //
  return (
      <Fragment>
        <div className='homePage-container-mobile'>
            <Contacts/>
        </div>
        <div className='homePage-container-pc'>

        </div>
      </Fragment>
  )
}

export default HomePage