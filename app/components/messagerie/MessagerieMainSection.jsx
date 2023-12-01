import React from 'react'
import LeftMenuComponent from '../MainSection/LeftMenu'
import MessagerieCore from './MessagerieCore'
import msgStyle from './msgStyles.module.css'

const MessagerieMainSection = () => {
  return (
    <div className={msgStyle.messagerieMainSection}>
        <LeftMenuComponent CurrentPage="Messagerie" />
        <MessagerieCore />
    </div>
  )
}

export default MessagerieMainSection