import React from 'react'
import mainStyles from '../../MainSection.module.css'
import Image from 'next/image'

const ConnectedFriendElement = () => {
  return (
    <div className={mainStyles.ConnectedFriendElement}>
        {/* <img className='img' src="#" alt="" /> */}
        <Image className={mainStyles.img} src="/profile.svg" alt="" width={25} height={25} />
        {/* <div className="img"></div> */}
        <div className={mainStyles.status}></div>
    </div>
  )
}

export default ConnectedFriendElement