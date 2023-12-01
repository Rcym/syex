'use client'

import React from 'react'
import mainStyles from '../MainSection.module.css'
import Image from 'next/image'

const PostCore = ({nbLikes}) => {

  const [isLiked, setIsLiked] = React.useState(false)
  const [nbLikesState, setNbLikesState] = React.useState(nbLikes)

  const handleClick = () => {
    setIsLiked(!isLiked)
    if (isLiked) {
      setNbLikesState(nbLikesState - 1)
    } else {
      setNbLikesState(nbLikesState + 1)
    }
  }

  return (
    <div onClick={() => handleClick()} className={mainStyles.postSubsection}>
      <div className={mainStyles.postDetailElement}>
        {isLiked ? 
        <Image src={'/hearth_full.svg'} alt="Likes" width={32} height={32}/> 
        : <Image src={'/hearth_empty.svg'} alt="Likes" width={32} height={32}/> }
        <p>{nbLikesState}</p>
      </div>
    </div>
  )
}

export default PostCore