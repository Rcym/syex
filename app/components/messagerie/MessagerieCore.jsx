'use client'

import React, {useState} from 'react'
import msgStyle from './msgStyles.module.css'
import ContactList from './Contacts/ContactList'
import DiscussionSection from './DiscussionSection/DiscussionSection'
import InformationSection from './InformationSection/InformationSection'

const MessagerieCore = () => {

  const [selectedContact, setSelectedContact] = useState(null)

  const handleContactClick = (clickedContact) => {
    setSelectedContact(clickedContact)
  }

  const contactList = [
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false},
    {name: "Groupe 1", status: "offline", profilePic: "/group.svg", isGroupe: true},
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "offline", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "offline", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "offline", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "offline", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false},
    {name: "john doe", status: "online", profilePic: "/profile.svg", isGroupe: false}
  ]


  return (
    <div className={msgStyle.messagerieCore}>
      <ContactList contactList={contactList} />
      <DiscussionSection />
      <InformationSection contactToInfo={selectedContact} isGroup={true}/>
    </div>
  )
}

export default MessagerieCore