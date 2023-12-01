import React from 'react'
import mainStyles from '../components/MainSection/MainSection.module.css'
import LeftMenu from '../components/MainSection/LeftMenu'
import RightMenu from '../components/MainSection/RightMenu/RightMenu'
import ProfileFeed from './ProfileFeed'

const ProfileMainSection = () => {

  return (
    <div className={mainStyles.container}>
        <LeftMenu CurrentPage="Profile" />
        <ProfileFeed />
        <RightMenu />
    </div>
  )
}

export default ProfileMainSection