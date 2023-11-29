import React from 'react'
import msgStyle from './msgStyles.module.css'
import ContactList from './ContactList'

const MessagerieCore = () => {
  return (
    <div className={msgStyle.messagerieCore}>
      <ContactList />
    </div>
  )
}

export default MessagerieCore