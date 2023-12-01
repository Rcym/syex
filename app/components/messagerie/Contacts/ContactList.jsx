'use client'

import React, { useState } from 'react'
import msgStyle from '../msgStyles.module.css'
import ContactElement from './ContactElement'
import AddGroup from './AddGroup'
import AddContact from './AddContact'

const ContactList = ({contactList}) => {

  const [selectedContact, setSelectedContact] = useState(null)

  const handleContactClick = (clickedContact) => {
    setSelectedContact(clickedContact)
    console.log(clickedContact)
  }

  // popup ajout gruope et contact
  const [isAddingContact, setIsAddingContact] = useState(false)
  const [isAddingGroup, setIsAddingGroup] = useState(false)



  return (
    <div className={msgStyle.contactList}>

        <h3>Contacts</h3>

        <div className={msgStyle.contactBtns}>
          <button onClick={() => {setIsAddingContact(true)}} className={msgStyle.AddGroupeBtn}>Ajouter un contact</button>
          <button onClick={() => {setIsAddingGroup(true)}} className={msgStyle.AddGroupeBtn}>Créer un groupe</button>
          <AddGroup isAddingGroup={isAddingGroup} setIsAddingGroup={setIsAddingGroup} />
          <AddContact isAddingContact={isAddingContact} setIsAddingContact={setIsAddingContact} />
        </div>

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