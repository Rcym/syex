import React from 'react'
import mainStyles from '../../MainSection.module.css'
import ConnectedFriendElement from './ConnectedFriendElement'

const ConnectedFriends = () => {
  return (
    <div className={`commonContainer ${mainStyles.connectedFriendsContainer}`}>
        <h3>Amis connectés</h3>
        <div className={mainStyles.connectedFriendsListContainer}>
            <ConnectedFriendElement />
            <ConnectedFriendElement />
            <ConnectedFriendElement />
            <ConnectedFriendElement />
            <ConnectedFriendElement />
            <ConnectedFriendElement />
            <ConnectedFriendElement />
        </div>
    </div>
  )
}

export default ConnectedFriends