import React from 'react'
import msgStyle from '../msgStyles.module.css'
import ProfileImg from '../../profileImg/ProfileImg'

const InformationSection = ({contactToInfo}) => {

  

  return (
    <div className={msgStyle.InformationSection}>
        <h3>informations</h3>

        <div className={msgStyle.infoSectionSpacer}></div>
        
        <ProfileImg className={msgStyle.contactImg} imgPath="/profile.svg" size={75} status="online" />
        <p className={msgStyle.informationContactName}>JohnDoe</p>

        <div className={msgStyle.infoSectionSpacer}></div>

        <div className={msgStyle.informationElement}>
          <p className={msgStyle.infoTitle}>address e-mail :</p>
          <p className={msgStyle.infoContent}>address@email.com</p>
        </div>
        <div className={msgStyle.informationElement}>
          <p className={msgStyle.infoTitle}>Numéro de téléphone :</p>
          <p className={msgStyle.infoContent}>0123456789</p>
        </div>
    </div>
  )
}

export default InformationSection