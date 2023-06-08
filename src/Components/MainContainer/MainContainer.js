import React from 'react'
import { MenuBar } from '../MenuBar/MenuBar'
import { FollowBar } from '../FollowBar/FollowBar'
import "./MainContainer.css"
export const MainContainer = () => {
  return (
    <div className='mainContainer'>
        <MenuBar/>
        <FollowBar/>
    </div>
  )
}
