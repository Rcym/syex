import React from 'react'
import mainStyles from '../MainSection.module.css'
import YouMightKnowSection from './YouMightKnow/YouMightKnowSection'
import ConnectedFriends from './ConnectedFriends/ConnectedFriends'
import Trends from './Trends/Trends'
import AcceptMembers from './GestionPage/AcceptMembers'
import GestionPage from './GestionPage/GestionPage'

const RightMenu = () => {
  return (
    <div className={mainStyles.rightMenuContainer}>
      <YouMightKnowSection />

      {/* admin only */}
      <GestionPage />
      <AcceptMembers />
      {/* admin only */}

      <ConnectedFriends />
      <Trends />
    </div>
  )
}

export default RightMenu