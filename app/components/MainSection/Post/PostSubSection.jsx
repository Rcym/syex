import React from 'react'
import mainStyles from '../MainSection.module.css'
import Image from 'next/image'

const PostCore = ({nbLikes}) => {
  return (
    <div className={mainStyles.postSubsection}>
      <div className={mainStyles.postDetailElement}>
        <Image src={'/hearth_full.svg'} alt="Likes" width={32} height={32}/>
        <p>{nbLikes}</p>
      </div>
    </div>
  )
}

export default PostCore