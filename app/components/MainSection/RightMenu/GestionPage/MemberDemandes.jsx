import React from 'react'
import mainStyles from '../../MainSection.module.css'
import ProfileImg from '@/app/components/profileImg/ProfileImg'

const MemberDemandes = ({demandeName, demandePic}) => {
  return (
    <div className={mainStyles.memberDemandesElement}>
        <div className={mainStyles.demandeInfo}>
            <ProfileImg imgPath={demandePic} size={22} status="offline"/>
            <div className={mainStyles.memberDemandesName}>{demandeName}</div>
        </div>
        
        <div className={mainStyles.memberDemandesButtons}>
            <button className={mainStyles.memberDemandesBtn}>Accepter</button>
            <button className={mainStyles.memberDemandesBtn}>Refuser</button>
        </div>
    </div>
  )
}

export default MemberDemandes