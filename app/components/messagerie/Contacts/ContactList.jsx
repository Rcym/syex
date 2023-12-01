'use client'

import React, { useState } from 'react'
import msgStyle from '../msgStyles.module.css'
import ContactElement from './ContactElement'

const ContactList = ({contactList}) => {

  const [selectedContact, setSelectedContact] = useState(null)

  const handleContactClick = (clickedContact) => {
    setSelectedContact(clickedContact)
    console.log(clickedContact)
  }

  return (
    <div className={msgStyle.contactList}>
        <h3>Contacts</h3>
        {contactList.map((contact, index) => (
          <ContactElement 
            key={index}
            onClick={() => handleContactClick(contact)}
            ContactName={contact.name}
            status={contact.status}
            profilePic={contact.profilePic} 
            isGroup={contact.isGroupe}
          />
        ))}


    </div>
  )
}

export default ContactList