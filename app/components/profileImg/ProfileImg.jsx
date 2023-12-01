import React from 'react'
import profileImgStyle from './profileImg.module.css'
import Image from 'next/image'

const ProfileImg = ({imgPath, size, status}) => {

  const statusMap = {
    online: profileImgStyle.online,
    offline: profileImgStyle.offline,
    busy: profileImgStyle.busy
  }
  const appliedStatus = statusMap[status]

  return (
    <div className={profileImgStyle.profileImgElement}>
        <div className={profileImgStyle.img}>
          <Image src={imgPath} alt="a" width={size} height={size} />
        </div>
        <div className={`${appliedStatus} ${profileImgStyle.status}`}></div>
    </div>
  )
}

export default ProfileImg