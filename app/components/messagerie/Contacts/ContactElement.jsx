import React from 'react'
import msgStyle from '../msgStyles.module.css'
import ProfileImg from '../../profileImg/ProfileImg'

const ContactElement = ({ContactName, status, profilePic, isGroup}) => {

  let contactSubtext = status == "online" ? "En ligne" : "Hors ligne"
  if (isGroup) contactSubtext = "Groupe"

  return (
    <div className={msgStyle.ContactElement}>
        <div className={msgStyle.ContactProfilePic}>
            <ProfileImg className={msgStyle.contactImg} imgPath={profilePic} size={36} status={status} />
        </div>
        <div className={msgStyle.contactInfo}>
            <h3>{ContactName}</h3>
            <p>{contactSubtext}</p>
        </div>
    </div>
  )
}

export default ContactElement