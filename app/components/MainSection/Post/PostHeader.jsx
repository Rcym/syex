import React from 'react'
import mainStyles from '../MainSection.module.css'

const PostHeader = ({Author, postDate}) => {
  return (
    <div className={mainStyles.postHeader}>
        <div className={mainStyles.postProfilPic}></div>
        <div className={mainStyles.postHeaderInfo}>
            <div className={mainStyles.postProfilName}>{Author}</div>
            <div className={mainStyles.postProfilDate}>{postDate}</div>
        </div>
    </div>
  )
}

export default PostHeader