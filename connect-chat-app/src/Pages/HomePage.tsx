import React, { Fragment } from 'react'
import Contacts from '../Components/Contacts'
function HomePage() {
    //state controlling which view in mobile mode
  return (
      <Fragment>
        <div className='homePage-container-mobile'>
            <Contacts/>
        </div>
        <div className='homePage-container-pc'>
            <Fragment>
                <Contacts/>
        </div>
      </Fragment>
  )
}

export default HomePage