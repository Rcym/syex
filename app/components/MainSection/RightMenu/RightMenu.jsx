import React from 'react'
import mainStyles from '../MainSection.module.css'
import YouMightKnowSection from './YouMightKnow/YouMightKnowSection'
import ConnectedFriends from './ConnectedFriends/ConnectedFriends'
import Trends from './Trends/Trends'

const RightMenu = () => {
  return (
    <div className={mainStyles.rightMenuContainer}>
      <YouMightKnowSection />
      <ConnectedFriends />
      <Trends />
    </div>
  )
}

export default RightMenu