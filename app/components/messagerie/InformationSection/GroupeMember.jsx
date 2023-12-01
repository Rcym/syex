import React from 'react'
import msgStyle from '../msgStyles.module.css'
import ProfileImg from '../../profileImg/ProfileImg'

const GroupeMember = ({memberName, memberPic}) => {
  return (
    <div className={msgStyle.groupeMemberElement}>
        <div className={msgStyle.grpMemberImg}>
            <ProfileImg imgPath={memberPic} size={22} status="offline" />
        </div>
        <p className={msgStyle.informationContactName}>{memberName}</p>
    </div>
  )
}

export default GroupeMember